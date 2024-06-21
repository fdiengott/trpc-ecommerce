import { createCallerFactory, publicProcedure, router } from '../trpc';
import { addressRouter } from './address';
import { orderRouter } from './order';
import { postRouter } from './post';
import { productRouter } from './product';

export const appRouter = router({
    healthcheck: publicProcedure.query(() => 'yay!'),

    post: postRouter,
    product: productRouter,
    order: orderRouter,
    address: addressRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
