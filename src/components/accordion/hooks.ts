import { createContext, useContext } from 'react';
import { AccordionContextType, AccordionItemContextType } from './types';

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an AccordionRoot');
  }
  return context;
};


export const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

export const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('Accordion item components must be used within an AccordionItem');
  }
  return context;
}; 