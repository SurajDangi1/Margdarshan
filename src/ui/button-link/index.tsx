import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import { twMerge } from "tailwind-merge";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none",
};

const variantStyles = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    blue: "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    blue: "", // get some blue design
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
  },
};

export const ButtonRevamp = ({
  buttonProps,
  variant,
  color,
}: {
  buttonProps: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  variant: "solid" | "outline";
  color: "slate" | "white" | "blue";
}) => {
  return (
    <button
      className={twMerge(
        baseStyles[variant],
        variantStyles[variant][color],
        buttonProps.className
      )}
      {...buttonProps}
    />
  );
};

export const ButtonLink = ({
  variant,
  color,
  href,
  ...props
}: {
  variant?: "solid" | "outline";
  color?: "slate" | "white" | "blue";
  href: string;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={twMerge(
          `${
            (variant && baseStyles[variant],
            variant && color && variantStyles[variant][color],
            props.className)
          }`
        )}
        {...props}
      >
        {props.children}
      </a>
    </Link>
  );
};
