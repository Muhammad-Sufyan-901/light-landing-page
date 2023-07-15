import React from "react";
import icons from "../constant/icons";

const { IoClose } = icons;

function NavMobile({ content, setNavMobile }) {
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose onClick={() => setNavMobile(false)} className="text-3xl absolute left-4 top-7 cursor-pointer" />
      <ul className="flex flex-col items-center justify-center space-y-8 font-secondary h-full">
        {content.map((title, index) => (
          <li key={index} className={title === "Sign Up" ? "btn" : "text-lg"}>
            <a href="/#">{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMobile;
