import { z } from 'zod';

export const indexSchema = z.object({
    limit: z.number().min(1).max(100).nullish(),
    page: z.number().nullish(),
});

export const detailsSchema = z.object({ id: z.string() });

export const detailsListSchema = z.object({
    ids: z.array(z.string()),
});
