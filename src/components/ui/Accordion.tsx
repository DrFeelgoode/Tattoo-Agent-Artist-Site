"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  onKeyDown: (e: React.KeyboardEvent) => void;
  buttonRef: (el: HTMLButtonElement | null) => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
  onKeyDown,
  buttonRef,
}: AccordionItemProps) {
  return (
    <div className="border-b border-cream/10">
      <button
        ref={buttonRef}
        id={`${id}-trigger`}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        className={cn(
          "flex w-full items-center justify-between py-5 text-left",
          "transition-colors duration-200 hover:text-lime",
        )}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
      >
        <span className="pr-4 text-lg font-medium text-cream">
          {question}
        </span>
        <span
          className={cn(
            "shrink-0 text-2xl text-lime transition-transform duration-200",
            isOpen && "rotate-45",
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      const total = items.length;
      let target: number | null = null;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          target = (index + 1) % total;
          break;
        case "ArrowUp":
          e.preventDefault();
          target = (index - 1 + total) % total;
          break;
        case "Home":
          e.preventDefault();
          target = 0;
          break;
        case "End":
          e.preventDefault();
          target = total - 1;
          break;
      }

      if (target !== null) {
        buttonRefs.current[target]?.focus();
      }
    },
    [items.length],
  );

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={`accordion-${index}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
          onKeyDown={(e) => handleKeyDown(e, index)}
          buttonRef={(el) => {
            buttonRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}
