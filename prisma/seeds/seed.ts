/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import { products } from './productSeeds';

const prisma = new PrismaClient();

async function main() {
  const productCount = await prisma.product.count();

  if (productCount === 0) {
    for (const product of products) {
      const id = randomUUID();

      await prisma.product.upsert({
        where: { id },
        create: product,
        update: {},
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
