'use client';
import styles from './CartQuantity.module.scss';
import { useShoppingCart } from '~/hooks/useShoppingCart';

const CartQuantity = () => {
    const { cartQuantity } = useShoppingCart();

    if (!cartQuantity) {
        return null;
    }

    return <span className={styles['quantity-indicator']}>{cartQuantity}</span>;
};

export default CartQuantity;
