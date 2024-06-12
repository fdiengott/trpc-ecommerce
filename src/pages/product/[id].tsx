import NextError from 'next/error';
import { useRouter } from 'next/router';

import { trpc } from '~/utils/trpc';
import Product from '../../components/Product/Product';
import type { ProductType } from '~/server/routers/product';
import { GetStaticProps } from 'next';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter, createContext } from '../api/trpc/[trpc]';
import superjson from 'superjson';
import { prisma } from '~/server/prisma';

const ProductDetails = () => {
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

export const getStaticProps: GetStaticProps = async (context) => {
    const helpers = createServerSideHelpers({
        router: appRouter,
        ctx: await createContext(),
        transformer: superjson,
    });

    const id = context.params?.id as string;
    await helpers.product.byId.prefetch({ id });

    return {
        props: {
            trpcState: helpers.dehydrate(),
            id,
        },
        revalidate: 1,
    };
};

export const getStaticPaths = async () => {
    const products = await prisma.product.findMany({
        select: {
            id: true,
        },
    });

    const paths = products.map((product) => ({
        params: { id: product?.id },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export default ProductDetails;
