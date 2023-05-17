import { slugify } from "@/ui";
import { DetailedHTMLProps, HTMLAttributes, useRef } from "react";

const H2 = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  const { children, ...otherProps } = props;
  const h2Ref = useRef<HTMLHeadingElement>(null);
  return (
    <h2
      id={slugify(children?.toString())}
      ref={h2Ref}
      className={`text-title-4 font-bold`}
      style={
        {
          // paddingTop: isLg ? 100 : 160,
          // marginTop: isLg ? -80 : -40,
        }
      }
      {...otherProps}
    >
      {children}
    </h2>
  );
};

export default H2;
