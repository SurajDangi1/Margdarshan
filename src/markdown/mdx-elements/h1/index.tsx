import { slugify } from "@/ui";
import { useRef } from "react";

const H1 = ({ children }: { children: string }) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  return (
    <h1
      id={slugify(children)}
      ref={h2Ref}
      className={`line text-[48px] font-bold leading-[65px]`}
      style={
        {
          // paddingTop: isLg ? 100 : 160,
          // marginTop: isLg ? -80 : -40,
        }
      }
    >
      {children}
    </h1>
  );
};

export default H1;
