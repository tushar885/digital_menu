import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import menu from "../utils/menu";
import * as Separator from "@radix-ui/react-separator";
import { useState, useRef } from "react";

const AccordionDemo2 = ({ activeAccordion, setActiveAccordion }) => {
  return (
    <Accordion.Root
      className="bg-mauve6 max-w-4xl w-full rounded-md shadow-[0_2px_10px] shadow-black/5 my-8"
      type="single"
      collapsible
      value={activeAccordion}
      onValueChange={(id) => {
        setActiveAccordion(id);
      }}
    >
      {Object.keys(menu).map((category) => {
        return (
          <AccordionItem value={`${category}`} id={`${category}`}>
            <AccordionTrigger className="font-bold hover:cursor-pointer">
              {category}
            </AccordionTrigger>
            <AccordionContent className="shadow-xl">
              {Object.keys(menu[category]).map((menuItem, index) => {
                return (
                  <>
                    <div className="w-full flex justify-between p-4 gap-8">
                      <p className="font-semibold ">{menuItem}</p>
                      <p className="self-end">
                        <span className="font-semibold">₹</span>{" "}
                        {menu[category][menuItem]}
                      </p>
                    </div>
                    {index != Object.keys(menu[category]).length - 1 ? (
                      <Separator.Root className="bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px " />
                    ) : null}
                  </>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        );
      })}

      {/* <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem> */}
    </Accordion.Root>
  );
};

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-violet11 shadow-mauve6 py-8 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo2;
