import { DetailedHTMLProps, HTMLAttributes, ReactNode, useRef } from "react";

const H1 = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  const { children, ...otherProps } = props;

  return (
    <h1
      ref={h2Ref}
      className="line text-[48px] font-bold leading-[65px]"
      style={
        {
          // paddingTop: isLg ? 100 : 160,
          // marginTop: isLg ? -80 : -40,
        }
      }
      {...otherProps}
    >
      {children}
    </h1>
  );
};

export default H1;
