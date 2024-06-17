import NextError from 'next/error';
import OrderSummary from '~/components/Orders/Summary';
import CartProduct from '~/components/Product/CartProduct';
import { useShoppingCart } from '~/hooks/useShoppingCart';
import { trpc } from '~/utils/trpc';

const Page = () => {
    const { cartItems } = useShoppingCart();

    const cartIds = Object.keys(cartItems);

    const { isLoading, data, error } = trpc.product.byIds.useQuery({
        ids: cartIds,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <NextError
                title={error.message}
                statusCode={error.data?.httpStatus ?? 500}
            />
        );
    }

    const cartProducts = data?.filter((product) => cartItems[product.id]);

    const subTotal = cartProducts?.reduce((acc, product) => {
        return acc + product.price * (cartItems[product.id] as number);
    }, 0);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cartProducts?.map((product) => (
                    <CartProduct
                        {...product}
                        key={product.id}
                        quantity={cartItems[product.id] as number}
                    />
                ))}
            </div>
            <OrderSummary subTotal={subTotal} />
        </div>
    );
};

export default Page;
