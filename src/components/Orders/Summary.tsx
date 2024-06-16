import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';

const OrderSummary = ({ subTotal /* discount, shipping */ }) => {
    const total = subTotal; /* + discount + shipping */

    //  TODO:
    const handleCheckout = () => {
        console.log('Checkout');
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mt-8 p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="grid grid-cols-2 gap-2 mb-4">
                <p className="text-gray-500 dark:text-gray-400">Subtotal:</p>
                <p className="text-right">${subTotal}</p>
                {/* <p className="text-gray-500 dark:text-gray-400">Discount:</p> */}
                {/* <p className="text-right">-$10.00</p> */}
                {/* <p className="text-gray-500 dark:text-gray-400">Shipping:</p> */}
                {/* <p className="text-right">$5.00</p> */}
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
                <p className="text-lg font-bold">Total:</p>
                <p className="text-lg font-bold">${total}</p>
            </div>
            <Button className="w-full mt-4" size="lg" onClick={handleCheckout}>
                Proceed to Checkout
            </Button>
        </div>
    );
};

export default OrderSummary;
