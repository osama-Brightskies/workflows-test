import React from 'react';
import { AccordionItemProps } from './types';
import { useAccordion, AccordionItemContext } from './hooks';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  id,
  className = '',
}) => {
  const { activeItems, toggleItem } = useAccordion();
  const isExpanded = activeItems.includes(id);

  return (
    <AccordionItemContext.Provider
      value={{
        id,
        isExpanded,
        onToggle: () => toggleItem(id),
      }}
    >
      <div className={`border-b border-gray-200 last:border-0 my-2 ${className}`}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}; 