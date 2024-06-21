import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';
import { prisma } from '../prisma';
import { TRPCError } from '@trpc/server';

export const addressSchema = z.object({
    addressLine1: z.string(),
    addressLine2: z.string().optional(),
    city: z.string(),
    country: z.string(),
    phoneNumber: z.string(),
    postalCode: z.string(),
    state: z.string(),
    userId: z.string(),
});

export type AddressType = z.infer<typeof addressSchema>;

export const addressRouter = router({
    create: protectedProcedure
        .input(addressSchema)
        .mutation(async ({ input }) => {
            const {
                addressLine1,
                addressLine2,
                city,
                country,
                phoneNumber,
                postalCode,
                state,
                userId,
            } = input;

            const address = await prisma.address.create({
                data: {
                    addressLine1,
                    addressLine2,
                    city,
                    country,
                    phoneNumber,
                    postalCode,
                    state,
                    userId,
                },
            });

            if (!address) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: 'Error creating address',
                });
            }

            return address;
        }),
    getByUserId: protectedProcedure
        .input(z.object({ userId: z.string() }))
        .query(async ({ input }) => {
            const { userId } = input;

            const address = await prisma.address.findMany({
                where: {
                    userId,
                },
            });

            if (!address) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'Address not found',
                });
            }

            return address;
        }),
});
