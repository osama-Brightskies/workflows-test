import { ReactNode } from 'react';

export interface AccordionContextType {
  activeItems: string[];
  toggleItem: (id: string) => void;
  allowMultiple?: boolean;
}

export interface AccordionRootProps {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultActiveItems?: string[];
  className?: string;
}

export interface AccordionItemProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

export interface AccordionContentProps {
  children: ReactNode;
  className?: string;
} 

export interface AccordionItemContextType {
  id: string;
  isExpanded: boolean;
  onToggle: () => void;
}