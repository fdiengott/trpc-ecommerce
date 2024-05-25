import Product from './Product';
import { trpc } from '~/utils/trpc';

const Products = () => {
  const productQuery = trpc.product.list.useInfiniteQuery(
    {
      limit: 10,
    },
    {
      getNextPageParam(lastPage) {
        return lastPage.nextCursor;
      },
    },
  );

  const { isLoading, data, isError } = productQuery;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>error</div>;
  }

  return (
    <ul>
      {data?.pages[0]?.products.map((product, i: number) => {
        return <Product key={`product-${i}`} product={product} />;
      })}
    </ul>
  );
};

export default Products;
