import { ProductType } from '~/server/routers/product';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '~/components/ui/select';
import { Button } from '~/components/ui/button';

type ProductProps = { product: ProductType };

const Product = ({ product }: ProductProps) => {
  return (
    <li>
      <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950">
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
        <div className="p-4 grid gap-4">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              ${product.price}
            </p>
            <p>{product.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="1">
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
            <Button className="flex-1" size="sm">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;
