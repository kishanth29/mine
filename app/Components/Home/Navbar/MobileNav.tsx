import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        onClick={closeNav}
      ></div>

      {/* Navigation Menu */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed inset-y-0 left-0 z-[10000] flex flex-col justify-center items-center w-[80%] sm:w-[60%] bg-[#0f0715] text-white space-y-6 p-4`}
      >
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url} className="w-full">
            <p className="nav__link text-[20px] border-b-[1.5px] border-gray-500 pb-2 sm:text-[24px] text-center hover:text-gray-300 transition">
              {navlink.label}
            </p>
          </Link>
        ))}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
