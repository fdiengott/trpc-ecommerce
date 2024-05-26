import { trpc } from '../utils/trpc';
import NextError from 'next/error';
import type { NextPageWithLayout } from './_app';
import Nav from '~/components/Nav/Nav';
import Products from '../components/Products/Products';

const IndexPage: NextPageWithLayout = () => {
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
    return (
      <NextError
        title={productQuery.error.message}
        statusCode={productQuery.error.data?.httpStatus ?? 500}
      />
    );
  }
  // const utils = trpc.useUtils();

  // prefetch all posts for instant navigation
  // useEffect(() => {
  //   const allPosts = postsQuery.data?.pages.flatMap((page) => page.items) ?? [];
  //   for (const { id } of allPosts) {
  //     void utils.post.byId.prefetch({ id });
  //   }
  // }, [postsQuery.data, utils]);

  return (
    <div className="flex flex-col bg-gray-800 py-8">
      <Nav />
      <section>
        <Products products={data?.pages[0]?.products} />
      </section>
    </div>
  );
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/v11/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createServerSideHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.post.all.fetch();
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
