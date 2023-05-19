import { mainLinks } from "@/ui/constants";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export type MobileNavLinks = {
  name: string;
  navName?: string;
  list?: {
    name: string;
    description: string;
    subLinks?: {
      name: string;
    }[];
  }[];
}[];

const MobileNav = (props: { close: () => void }) => {
  return (
    <div className="container flex h-[calc(100vh-64px)] flex-col justify-between overflow-auto px-5 pb-7 xl:hidden">
      <div className="flex-1">
        {mainLinks.map((link, idx) => (
          <div
            key={idx}
            className={`border-b-grey-300 cursor-pointer border-b transition-all my-8 flex items-center justify-between hover:border-opacity-100 
          }`}
          > {link.text}
            <AiOutlineArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
