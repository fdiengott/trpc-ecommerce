import type { NextPageWithLayout } from '../_app';
import AddProduct from './AddProduct';
import Products from './Products';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Products />
      <AddProduct />
    </div>
  );
};

export default Page;
