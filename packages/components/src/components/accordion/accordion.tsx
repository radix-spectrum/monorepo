"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import classNames from "classnames";
// import { ChevronDown } from "lucide-react";

// import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionRoot = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Root
        ref={ref}
        className={classNames("spectrum-Accordion spectrum-Accordion--sizeM", className)}
        {...props}
    />
));
AccordionRoot.displayName = "AccordionRoot";

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={classNames("spectrum-Accordion-item", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

////

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={classNames("spectrum-Accordion-itemHeader", className)}
            {...props}
        >
            {children}
            {/* <span className="spectrum-Accordion-itemIconContainer">
        <ChevronDown className="spectrum-Icon spectrum-UIIcon-ChevronRight100 spectrum-Accordion-itemIndicator" />
      </span> */}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

////

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={classNames("spectrum-Accordion-itemContent", className)}
        {...props}
    >
        {children}
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent };
