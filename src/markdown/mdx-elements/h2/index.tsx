import { slugify } from "@/ui";
import { useRef } from "react";

const H2 = ({ children }: { children: string }) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  return (
    <h2
      id={slugify(children)}
      ref={h2Ref}
      className={`text-title-4 font-bold`}
      style={
        {
          // paddingTop: isLg ? 100 : 160,
          // marginTop: isLg ? -80 : -40,
        }
      }
    >
      {children}
    </h2>
  );
};

export default H2;
