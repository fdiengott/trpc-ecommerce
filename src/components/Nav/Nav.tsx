import styles from './nav.module.scss';
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';

const Nav = () => {
  return (
    <header className={styles.header}>
      <h1 className="text-4xl font-bold">Finger Lakes Harvest</h1>
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
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Login
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          <span className="sr-only">Cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Nav;