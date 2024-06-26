import { z } from 'zod';
import { protectedProcedure, publicProcedure, router } from '../trpc';
import { prisma } from '../prisma';
import { TRPCError } from '@trpc/server';
import { detailsListSchema, detailsSchema, indexSchema } from './sharedSchemas';
import { WithRequired } from '~/utils/types';
import { PRODUCTS_PER_PAGE } from '~/constants';

export const productSchema = z.object({
    id: z.string().uuid().optional(),
    name: z.string().min(1).max(32),
    description: z.string().min(1),
    price: z.number().positive(),
    inventory: z.number().positive().optional(),
    categoryId: z.string().min(1).optional(),
    images: z.array(z.string().url()),
});
export const searchSchema = z.object({
    searchTerm: z.string().min(1),
});

export type ProductType = WithRequired<z.infer<typeof productSchema>, 'id'>;

export const productRouter = router({
    search: publicProcedure.input(searchSchema).query(async ({ input }) => {
        const { searchTerm } = input;

        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: searchTerm,
                },
            },
            take: PRODUCTS_PER_PAGE,
            orderBy: {
                // createdAt: 'desc',
                _relevance: {
                    fields: ['name'],
                    search: 'database',
                    sort: 'asc',
                },
            },
        });

        return products;
    }),
    list: publicProcedure.input(indexSchema).query(async ({ input }) => {
        const limit = input?.limit ?? PRODUCTS_PER_PAGE;
        const page = input?.page;

        const products = await prisma.product.findMany({
            take: limit + 1,
            skip: page ? page * PRODUCTS_PER_PAGE : 0,
            where: {},
            orderBy: {
                //  TODO: update this
                createdAt: 'desc',
            },
        });

        if (products.length > limit) {
            return {
                products: products.slice(0, -1),
                nextCursor: products.at(-1)?.id,
            };
        }

        return {
            products,
        };
    }),
    byId: publicProcedure.input(detailsSchema).query(async ({ input }) => {
        const { id } = input;

        const product = await prisma.product.findUnique({
            where: { id },
            //  TODO: is this needed?
            // select: defaultProductSelect,
        });

        if (!product) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `No product with id ${id}`,
            });
        }

        return product;
    }),
    byIds: publicProcedure.input(detailsListSchema).query(async ({ input }) => {
        const { ids } = input;

        const products = await prisma.product.findMany({
            where: { id: { in: ids } },
            // select: defaultProductSelect,
        });

        return products;
    }),
    add: protectedProcedure.input(productSchema).mutation(async ({ input }) => {
        // add: publicProcedure.input(productSchema).mutation(async ({ input }) => {
        const product = await prisma.product.create({
            data: input,
            // select: defaultProductSelect,
        });

        return product;
    }),
    delete: protectedProcedure
        .input(detailsSchema)
        .mutation(async ({ input }) => {
            const { id } = input;

            try {
                const product = await prisma.product.delete({
                    where: { id },
                });

                if (!product) {
                    throw new TRPCError({
                        code: 'NOT_FOUND',
                        message: `No product with id ${id}`,
                    });
                }

                return true;
            } catch (error) {
                console.error(error);

                return false;
            }
        }),
});
