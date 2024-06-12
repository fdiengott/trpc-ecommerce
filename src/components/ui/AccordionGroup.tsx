import './accordionStyles.css';
import * as RadixAccordion from '@radix-ui/react-accordion';

type AccordionGroupProps = {
    children: React.ReactNode;
};

const AccordionGroup = ({ children }: AccordionGroupProps) => {
    return (
        <RadixAccordion.Root
            className="AccordionRoot"
            type="single"
            collapsible
        >
            {children}
        </RadixAccordion.Root>
    );
};

export default AccordionGroup;
