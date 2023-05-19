import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Container = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", ${props.className}`
      )}
      {...otherProps}
    />
  );
};
