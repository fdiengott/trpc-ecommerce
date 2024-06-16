import { ProductType } from '~/server/routers/product';
import { useShoppingCart } from '~/hooks/useShoppingCart';
import UpdateCartQuantity from './UpdateCartQuantity';

type CartProductProps = Omit<ProductType, 'categoryId'> & {
    quantity: number;
};
const CartProduct = ({
    id,
    images,
    name,
    price,
    quantity,
}: CartProductProps) => {
    const { increaseItemQuantity, decreaseItemQuantity, removeItem } =
        useShoppingCart();

    const handleIncreaseQuantity = () => {
        increaseItemQuantity(id, 1);
    };
    const handleDecreaseQuantity = () => {
        decreaseItemQuantity(id, 1);
    };
    const handleRemoveItem = () => {
        removeItem(id);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex items-center p-4">
                <img
                    alt="Product Image"
                    className="rounded-md mr-4"
                    height={80}
                    src={images?.[0] || '/placeholder.svg'}
                    style={{
                        aspectRatio: '80/80',
                        objectFit: 'cover',
                    }}
                    width={80}
                />
                <div className="flex-grow">
                    <h3 className="text-lg font-medium">{name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">${price}</p>
                    <UpdateCartQuantity
                        quantity={quantity}
                        handleDecreaseQuantity={handleDecreaseQuantity}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                        handleRemoveItem={handleRemoveItem}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
