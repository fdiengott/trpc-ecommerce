import { Button } from '~/components/ui/button';
import MinusIcon from '../Icons/MinusIcon';
import PlusIcon from '../Icons/PlusIcon';

type UpdateCartQuantityProps = {
    quantity: number;
    handleDecreaseQuantity: () => void;
    handleIncreaseQuantity: () => void;
    handleRemoveItem: () => void;
};
const UpdateCartQuantity = ({
    quantity,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveItem,
}: UpdateCartQuantityProps) => {
    return (
        <div className="flex items-center mt-2 gap-4">
            <div>
                <Button
                    className="mr-2"
                    size="icon"
                    variant="outline"
                    onClick={handleDecreaseQuantity}
                >
                    <MinusIcon className="h-4 w-4" />
                </Button>
                <span className="text-gray-700 dark:text-gray-300">
                    {quantity}
                </span>
                <Button
                    className="ml-2"
                    size="icon"
                    variant="outline"
                    onClick={handleIncreaseQuantity}
                >
                    <PlusIcon className="h-4 w-4" />
                </Button>
            </div>
            <Button variant="link" onClick={handleRemoveItem}>
                delete
            </Button>
        </div>
    );
};

export default UpdateCartQuantity;
