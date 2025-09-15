import React, { useState } from "react";
import { AccordionRootProps } from "./types";
import { AccordionContext } from "./hooks";

export const AccordionRoot: React.FC<AccordionRootProps> = ({
  children,
  allowMultiple = false,
  defaultActiveItems = [],
  className = "",
}) => {
  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const toggleItem = (id: string) => {
    setActiveItems((prev) => {
      if (allowMultiple) {
        return prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  return (
    <AccordionContext.Provider
      value={{ activeItems, toggleItem, allowMultiple }}
    >
      <div
        className={`w-full max-w-2xl mx-auto rounded-lg bg-white shadow-md ${className}`}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
