import styles from './CartButton.module.scss';
import { Button } from '~/components/ui/button';
import { useShoppingCart } from '~/hooks/useShoppingCart';
import { updateStorageStatuses } from '~/constants';
import { Check } from 'lucide-react';

const ButtonWrapper = ({ children, ...props }: any) => (
    <Button {...props} size="sm">
        {children}
    </Button>
);
const CartButton = ({ id, ...props }: any) => {
    const { updateStorageStatus } = useShoppingCart();

    console.log('updateStorageStatus', updateStorageStatus);
    const [statusId, status] = updateStorageStatus.split(':');

    const isId = id === statusId;

    if (!isId || status === updateStorageStatuses.IDLE) {
        return <ButtonWrapper {...props}>Add to cart</ButtonWrapper>;
    }

    if (status === updateStorageStatuses.IDLE) {
        return <ButtonWrapper {...props}>Add to cart</ButtonWrapper>;
    }

    if (status === updateStorageStatuses.LOADING) {
        return <ButtonWrapper {...props}>Updating...</ButtonWrapper>;
    }

    if (status === updateStorageStatuses.SUCCESS) {
        return (
            <ButtonWrapper {...props} className={styles['success']}>
                <Check color="green" />
            </ButtonWrapper>
        );
    }

    if (status === updateStorageStatuses.ERROR) {
        return <ButtonWrapper {...props}>Error updating cart</ButtonWrapper>;
    }

    return <ButtonWrapper {...props}>Add to cart</ButtonWrapper>;
};

export default CartButton;
