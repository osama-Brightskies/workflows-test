import React from 'react';
import { AccordionContentProps } from './types';
import { useAccordionItem } from './hooks';

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = '',
}) => {
  const { isExpanded,id} = useAccordionItem();

  return (
    <div
      className={`
        overflow-hidden transition-all duration-200 ease-in-out
        ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        ${className}
      `}
      role="region"
      aria-labelledby={id}  
      aria-hidden={!isExpanded}
    >
      <div className={`px-6 py-4 transform transition-all duration-200 ${
        isExpanded ? 'translate-y-0' : '-translate-y-2'
      }`}>
        {children}
      </div>
    </div>
  );
}; 