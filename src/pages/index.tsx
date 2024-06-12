import superjson from 'superjson';
import { createServerSideHelpers } from '@trpc/react-query/server';
import NextError from 'next/error';
import { GetStaticProps } from 'next';
import { trpc } from '../utils/trpc';
import { appRouter, createContext } from './api/trpc/[trpc]';
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
        <section className="flex flex-col bg-gray-800 py-8">
            <Products products={data?.products as ProductType[]} />
        </section>
    );
};

export default IndexPage;

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
