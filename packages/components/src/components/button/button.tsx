"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import * as React from "react";

const buttonVariants = cva("spectrum-Button", {
    variants: {
        variant: {
            accent: "spectrum-Button--accent",
            outline: "spectrum-Button--outline",
            negative: "spectrum-Button--negative",
            primary: "spectrum-Button--primary",
            secondary: "spectrum-Button--secondary",
            white: "spectrum-Button--staticWhite",
            black: "spectrum-Button--staticBlack",
            link: "text-primary underline-offset-4 hover:underline",
            icon: "spectrum-Button--iconOnly",
        },
        fill: {
            fill: "spectrum-Button--fill",
            outline: "spectrum-Button--outline",
        },
        size: {
            sm: "spectrum-Button--sizeS",
            md: "spectrum-Button--sizeM",
            lg: "spectrum-Button--sizeL",
            xl: "spectrum-Button--sizeXL",
        },
    },
    defaultVariants: {
        variant: "accent",
        fill: "fill",
        size: "md",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, fill, size, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp className={buttonVariants({ variant, fill, size, className })} ref={ref} {...props}>
                {children}
            </Comp>
        );
    },
);
Button.displayName = "Button";

////

export interface ButtonLabelProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {}

const ButtonLabel = React.forwardRef<HTMLSpanElement, ButtonLabelProps>(({ className, ...props }, ref) => {
    return <span className={clsx("spectrum-Button-label", className)} ref={ref} {...props} />;
});

ButtonLabel.displayName = "ButtonLabel";

export { Button, ButtonLabel, buttonVariants };
