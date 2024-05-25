import { createCallerFactory, publicProcedure, router } from '../trpc';
import { postRouter } from './post';
import { productRouter } from './product';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),

  post: postRouter,
  product: productRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
