import styles from './product.module.scss';
import { useState } from 'react';
import { ProductType } from '~/server/routers/product';
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from '~/components/ui/select';
import { Button } from '~/components/ui/button';
import Link from 'next/link';
import { useShoppingCart } from '~/hooks/useShoppingCart';
import CartButton from '../CartButton';

type ProductProps = { product: ProductType };

const Product = ({ product }: ProductProps) => {
    const [quantity, setQuantity] = useState(1);
    const { increaseItemQuantity } = useShoppingCart();

    return (
        <li
            className={
                styles['product-wrapper'] +
                ' bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950'
            }
        >
            <Link href={`/product/${product.id}`}>
                <img
                    alt="Product 1"
                    className="w-full h-48 object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: '300/200',
                        objectFit: 'cover',
                    }}
                    width="300"
                />
            </Link>
            <div className="p-4 grid gap-4">
                <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        ${product.price}
                    </p>
                    <p>{product.description}</p>
                </div>
                <div className="flex items-end gap-2">
                    <Select
                        defaultValue="1"
                        onValueChange={(value) => setQuantity(Number(value))}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Qty" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                    </Select>
                    <CartButton id={product.id} onClick={() => increaseItemQuantity(product.id, quantity)} />
                    {/* <Button */}
                    {/*     className="flex-1" */}
                    {/*     size="sm" */}
                    {/*     onClick={() => { */}
                    {/*         increaseItemQuantity(product.id, quantity); */}
                    {/*     }} */}
                    {/* > */}
                    {/*     Add to cart */}
                    {/* </Button> */}
                </div>
            </div>
        </li>
    );
};

export default Product;
