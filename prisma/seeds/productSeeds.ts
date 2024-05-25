import { z } from 'zod';
import { productSchema } from '~/server/routers/product';

type Product = z.infer<typeof productSchema>;

export const products: Product[] = [
  {
    name: 'indexed',
    description: 'Sagittis eget dui nibh in efficitur.',
    price: 98.83,
  },
  {
    name: 'winter',
    description: 'Fringilla semper phasellus aenean non sapien.',
    price: 42.86,
  },
  {
    name: 'alike',
    description: 'Nulla dolor vitae id eros velit.',
    price: 61.0,
  },
  {
    name: 'dental',
    description: 'Nibh porta consectetur elit tristique et.',
    price: 68.69,
  },
  {
    name: 'prefers',
    description: 'Vel sed vel enim eros ligula.',
    price: 27.53,
  },
  {
    name: 'delays',
    description: 'Ipsum aenean phasellus at tempor ac.',
    price: 51.44,
  },
  {
    name: 'martial',
    description: 'Imperdiet nulla habitasse eleifend pellentesque ornare.',
    price: 88.52,
  },
];
