import React, { useEffect, useState } from "react";
import { ActiveLinkContext } from "./active-link-context";
import { useVerticalScroll } from "@/hooks";
import BrandBlackLogo from "public/assets/logo/margdarshan-logo-black.svg";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "../button";
import MobileNav from "./mobile-nav";
import { mainLinks } from "../constants";
import useReadingProgress from "@/hooks/usePageScrollBar";
import Logout from "@/pages/logout";

export const
  Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const vertScroll = useVerticalScroll();

    const completion = useReadingProgress();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
   
      const token = sessionStorage.getItem('token');
      setIsLoggedIn(!!token);
    }, []);


    return (
      <ActiveLinkContext.Provider
        value={{
          activeLink,
          setActiveLink,
        }}
      >
        <div
          style={{ top: 0 }}
          onMouseLeave={() => setActiveLink("")}
          className={`lg-block  ${scrolled ? 'bg-red-500' : 'bg-white/12'} fixed  left-1/2 z-40 w-full -translate-x-1/2 transform transition-all  hover:bg-white/100 ${vertScroll > 0 || isMobileNavOpen ? "bg-white/100" : ""
            }`}
        >


          <div
            className={`container flex grid-cols-12 items-center justify-between p-4 xl:grid`}
          >
            <div className="col-span-2 ">
              <div className="flex w-full items-center justify-between  font-bold lg:justify-start">
                <Link className="flex cursor-pointer" href="/">
                  <Image
                    alt="Margdarshan Logo"
                    src={BrandBlackLogo}
                    width={200}
                    height={100}
                    className="w-3/4 lg:w-full"
                  />
                </Link>
              </div>
            </div>
            <div className="col-span-7 flex justify-center gap-x-8">
              {isLoggedIn ? <div className="hidden gap-x-4 xl:flex xl:gap-x-8">
                <div className="cursor-pointer transition-all  hover:border-opacity-100 ">All Scholarships</div>
                <div className="cursor-pointer transition-all  hover:border-opacity-100 ">Central Scholarships</div>
                <div className="cursor-pointer transition-all  hover:border-opacity-100 ">UG Scholarships</div>
                <div className="cursor-pointer transition-all  hover:border-opacity-100 ">About</div>
                <div className="cursor-pointer transition-all  hover:border-opacity-100 "><Link href='/profile'></Link> </div>
              
              </div> :
                <div className={`hidden gap-x-4 xl:flex xl:gap-x-8`}>
                  {mainLinks.map((link, idx) => {
                    const onClick = () => {
                      if (link.link && window) {
                        window.location.href = link.link;
                      }
                    };
                    const currentActive = activeLink === link.text.toLowerCase();
                    return (
                      <div
                        key={idx}
                        onClick={onClick}
                        onMouseEnter={() => {
                          setActiveLink(link.text.toLowerCase());
                        }}
                        className={`border-b-secondary cursor-pointer border-b-2 transition-all  hover:border-opacity-100 ${currentActive ? "border-opacity-100" : "border-opacity-12"
                          }`}
                      >
                        {link.text}
                      </div>

                    );
                  })}

                </div>
              }

            </div>
            {/* <div className="cursor-pointer transition-all  hover:border-opacity-100 "> <Link href="/profile">Profile</Link> </div> */}
            {/* <span style={{transform:`translate(${completion - 100}%)`}} 
          className="absolute bg-warning h-1 w-full bottom-0"/> */}
            <div
              className={`col-span-3 hidden w-full items-center xl:flex justify-end`}
            >
              <div className={"ml-3 hidden  lg:flex"}>
                {/* Maybe a calendly link */}
                <Button href="" text="Career Consultation" theme="secondary" />
              </div>
            </div>
            <button
              aria-label="Toggle Navigation"
              className={`justify-self-end xl:hidden`}
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              {isMobileNavOpen ? (
                <AiOutlineClose className="w-6 h-6" />
              ) : (
                <AiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
          {isMobileNavOpen && (
            <MobileNav
              close={() => {
                setIsMobileNavOpen(false);
              }}
            />
          )}
        </div>

      </ActiveLinkContext.Provider>
    );
  };
