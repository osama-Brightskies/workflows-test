import React from "react";
import { AccordionTriggerProps } from "./types";
import { useAccordionItem } from "./hooks";

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className = "",
}) => {
  const { isExpanded, onToggle, id } = useAccordionItem();

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`
        w-full flex items-center justify-between px-6 py-4
        text-left text-base font-medium text-gray-700
        hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-all duration-200 ease-in-out
        ${isExpanded ? "bg-gray-50 text-blue-600" : ""}
        ${className}
      `}  
      aria-expanded={isExpanded}
      aria-controls={id}
    >
      {children}
      <svg
        className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
          isExpanded ? "rotate-180 text-blue-600" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};
