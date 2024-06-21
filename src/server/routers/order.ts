import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';
import { prisma } from '../prisma';
import { TRPCError } from '@trpc/server';
import { Prisma } from '@prisma/client';

export const orderItemSchema = z.object({
    productId: z.string().min(1),
    quantity: z.number().positive(),
});
export const orderSchema = z.object({
    userId: z.string().optional(),
    orderItems: z.array(orderItemSchema),
    shippingAddress: z.string(),
    billingAddress: z.string(),
    total: z.number().positive(),
});

export type OrderType = z.infer<typeof orderSchema>;

export const orderRouter = router({
    create: protectedProcedure
        .input(orderSchema)
        .mutation(async ({ input }) => {
            const {
                userId,
                orderItems,
                shippingAddress,
                billingAddress,
                total,
            } = input;

            const order = await prisma.order.create({
                data: {
                    userId,
                    orderItems,
                    shippingAddress,
                    billingAddress,
                    total,
                },
            });

            if (!order) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: 'Error creating order',
                });
            }

            const caseStatements = orderItems.map(
                (item) =>
                    Prisma.sql`WHEN id = ${item.productId} THEN ${item.quantity}`,
            );
            const productIds = orderItems.map((item) => item.productId);

            await prisma.$executeRaw`
            UPDATE Product
            SET inventory = inventory - CASE
            ${Prisma.join(caseStatements)}
            ELSE 0
            WHERE id IN (${Prisma.join(productIds)})
        `;

            return order;
        }),
    getByUserId: protectedProcedure
        .input(z.object({ userId: z.string() }))
        .query(async ({ input }) => {
            const { userId } = input;

            const orders = await prisma.order.findMany({
                where: {
                    userId,
                },
            });

            if (!orders) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'Orders not found',
                });
            }

            return orders;
        }),
});
