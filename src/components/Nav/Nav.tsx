import styles from './Nav.module.scss';
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import LoginLogout from '../Auth/LoginLogout';
import dynamic from 'next/dynamic';

const CartQuantity = dynamic(() => import('./CartQuantity'), {
    ssr: false,
});

const Nav = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                {/*  TODO: make this work on mobile */}
                <div className="text-4xl font-bold">Finger Lakes Harvest</div>
            </Link>
            <nav className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/faqs"
                >
                    FAQs
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/recipes"
                >
                    Recipes
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/journal"
                >
                    Journal
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/contact"
                >
                    Contact
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/wholesale"
                >
                    Wholesale
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/testimonials"
                >
                    Testimonials
                </Link>
            </nav>
            <div
                className={
                    styles['login-group'] +
                    ' flex items-center space-x-4 md:space-x-6 lg:space-x-8'
                }
            >
                <LoginLogout className="text-sm font-medium hover:underline underline-offset-4 " />
                <Link
                    className={
                        'text-sm font-medium hover:underline underline-offset-4 ' +
                        styles['cart-quantity-wrapper']
                    }
                    href="/cart"
                >
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span className="sr-only">Cart</span>
                    <CartQuantity />
                </Link>
            </div>
        </header>
    );
};

export default Nav;
