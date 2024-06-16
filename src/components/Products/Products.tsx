import Product from '../Product/Product';
import { ProductType } from '~/server/routers/product';
import styles from './products.module.scss';

type ProductsType = {
    products: ProductType[];
};
const Products = ({ products }: ProductsType) => {
    return (
        <ul className={styles['products-grid']}>
            {products.map((product, i: number) => {
                return <Product key={`product-${i}`} product={product} />;
            })}
        </ul>
    );
};

export default Products;
