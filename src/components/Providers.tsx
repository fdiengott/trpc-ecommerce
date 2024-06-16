import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '~/hooks/useShoppingCart';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <CartProvider>{children}</CartProvider>
        </SessionProvider>
    );
};

export default Providers;
