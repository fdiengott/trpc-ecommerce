import { createContext, useContext, useState } from 'react';
import {
    UPDATE_STORAGE_STATUS_TIMEOUT,
    updateStorageStatuses,
} from '~/constants';
import { useLocalStorage } from '~/hooks/useLocalStorage';

type CartProviderProps = {
    children: React.ReactNode;
};

type CartItemId = string;
type CartItemQuantity = number;

type CartContextType = {
    getItemQuantity: (itemId: string) => number;
    increaseItemQuantity: (itemId: string, quantity: number) => void;
    decreaseItemQuantity: (itemId: string, quantity: number) => void;
    removeItem: (itemId: string) => void;
    cartQuantity: number;
    cartItems: Record<CartItemId, CartItemQuantity>;
    updateStorageStatus: string;
};

const ShoppingCartContext = createContext({} as CartContextType);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useLocalStorage<
        Record<CartItemId, CartItemQuantity>
    >('shoppingCart', {});
    const [updateStorageStatus, setUpdateStorageStatus] = useState<string>('');

    const getItemQuantity = (itemId: CartItemId) => cartItems[itemId] ?? 0;

    const handleUpdateStorageStatus = (id: string, cb: () => void) => {
        try {
            setUpdateStorageStatus(id + ':' + updateStorageStatuses.LOADING);
            cb();
        } catch (error) {
            setUpdateStorageStatus(id + ':' + updateStorageStatuses.ERROR);
            console.error(error);
        } finally {
            setUpdateStorageStatus(id + ':' + updateStorageStatuses.SUCCESS);
            setTimeout(
                () =>
                    setUpdateStorageStatus(
                        id + ':' + updateStorageStatuses.IDLE,
                    ),
                UPDATE_STORAGE_STATUS_TIMEOUT,
            );
        }
    };

    const increaseItemQuantity = (
        itemId: CartItemId,
        quantity: CartItemQuantity = 1,
    ) => {
        handleUpdateStorageStatus(itemId, () => {
            setCartItems((currItems) => {
                const newQuantity = (currItems[itemId] ?? 0) + quantity;

                return { ...currItems, [itemId]: newQuantity };
            });
        });
    };

    const removeItemFromCart =
        (itemId: CartItemId) =>
        (currItems: Record<CartItemId, CartItemQuantity>) => {
            const updatedItems = { ...currItems };
            delete updatedItems[itemId];

            return updatedItems;
        };
    const removeItem = (itemId: string) => {
        setCartItems(removeItemFromCart(itemId));
    };

    const decreaseItemQuantity = (
        itemId: CartItemId,
        quantity: CartItemQuantity = 1,
    ) => {
        setCartItems((currItems) => {
            const newQuantity = currItems[itemId] ?? 0 - quantity;

            if (newQuantity <= 0) {
                removeItemFromCart(itemId)(currItems);
            }

            return { ...currItems, [itemId]: newQuantity };
        });
    };

    const cartQuantity = Object.values(cartItems).reduce(
        (total, quantity) => total + Number(quantity),
        0,
    );

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseItemQuantity,
                decreaseItemQuantity,
                removeItem,
                cartQuantity,
                cartItems,
                updateStorageStatus,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
