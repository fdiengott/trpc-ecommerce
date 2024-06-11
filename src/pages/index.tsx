import superjson from 'superjson';
import { createServerSideHelpers } from '@trpc/react-query/server';
import NextError from 'next/error';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { appRouter, createContext } from './api/trpc/[trpc]';
import Nav from '~/components/Nav/Nav';
import Products from '../components/Products/Products';

import type { NextPageWithLayout } from './_app';
import type { ProductType } from '~/server/routers/product';

const IndexPage: NextPageWithLayout = () => {
    const productQuery = trpc.product.list.useQuery(
        { limit: 10 },
        // {
        //     getNextPageParam(lastPage) {
        //         return lastPage.nextCursor;
        //     },
        // },
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

    return (
        <div className="flex flex-col bg-gray-800 py-8">
            <Head>
                <title>e-commerce site</title>
            </Head>
            <Nav />
            <section>
                <Products products={data?.products as ProductType[]} />
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
export const getStaticProps: GetStaticProps = async (context) => {
    const helpers = createServerSideHelpers({
        router: appRouter,
        ctx: await createContext(),
        transformer: superjson,
    });

    await helpers.product.list.prefetch({});

    return {
        props: {
            trpcState: helpers.dehydrate(),
            filter: context.params?.filter ?? 'all',
        },
        revalidate: 1,
    };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     // const { products } = await appRouter.product.list();
//     const products = await prisma.product.findMany({
//         // take: 10,
//         // orderBy: {
//         //     createdAt: 'desc',
//         // },
//     });
//
//     const paths = products.map((product) => ({
//         params: { id: product?.id },
//     }));
//
//     return {
//         paths,
//         fallback: 'blocking',
//     };
// };
