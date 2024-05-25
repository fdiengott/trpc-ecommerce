import { z } from 'zod';
import { protectedProcedure, publicProcedure, router } from '../trpc';
import { prisma } from '../prisma';
import { TRPCError } from '@trpc/server';
import { detailsSchema, indexSchema } from './sharedSchemas';

// const defaultProductSelect
const DEFAULT_LIMIT = 20;

const productSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1).max(32),
  description: z.string().min(1),
  price: z.number().positive(),
  categoryId: z.string().min(1),
});

export const productRouter = router({
  list: publicProcedure.input(indexSchema).query(async ({ input }) => {
    const limit = input.limit || DEFAULT_LIMIT;
    const cursor = input.cursor;

    const products = await prisma.product.findMany({
      // select: defaultProductSelect,
      take: limit + 1,
      where: {},
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
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
  add: protectedProcedure.input(productSchema).mutation(async ({ input }) => {
    const product = await prisma.product.create({
      data: input,
      // select: defaultProductSelect,
    });

    return product;
  }),
});
