import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type AccordionProps = {
    children: React.ReactNode;
    id: string;
    trigger: string;
};

const Accordion = ({ id, trigger, children }: AccordionProps) => {
    return (
        <RadixAccordion.Item className="AccordionItem" value={id}>
            <RadixAccordion.Trigger className="AccordionTrigger">
                {trigger}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </RadixAccordion.Trigger>
            <RadixAccordion.Content className="AccordionContent">
                {children}
            </RadixAccordion.Content>
        </RadixAccordion.Item>
    );
};

export default Accordion;
