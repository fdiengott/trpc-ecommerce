import { z } from 'zod';

export const indexSchema = z.object({
  limit: z.number().min(1).max(100).nullish(),
  cursor: z.string().nullish(),
});

export const detailsSchema = z.object({ id: z.string() });
