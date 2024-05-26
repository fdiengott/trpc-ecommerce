import NextError from 'next/error';
import { useRouter } from 'next/router';

import { trpc } from '~/utils/trpc';
import Product from '../../components/Product/Product';
import type { NextPageWithLayout } from '~/pages/_app';
import type { ProductType } from '~/server/routers/product';

const ProductDetails: NextPageWithLayout = () => {
  const id = useRouter().query.id as string;
  const { data, error, isLoading } = trpc.product.byId.useQuery({ id });

  if (error) {
    return (
      <NextError
        title={error.message}
        statusCode={error.data?.httpStatus ?? 500}
      />
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Product product={data as ProductType} />
    </div>
  );
};

export default ProductDetails;
