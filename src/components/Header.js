import React from "react";
import Nav from "./Nav";
import svg from "../constant/svg";
import icons from "../constant/icons";

const { logo } = svg;
const { HiMenu } = icons;

function Header({ content, setNavMobile }) {
  return (
    <header className="py-6" data-aos="fade-down" data-aos-duration="2000" data-aos-delay="900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/#">
            <img src={logo} alt="Header Logo" />
          </a>

          {/* Navbar */}
          <Nav content={content} />

          {/* Nav Mobile Buttons */}
          <HiMenu onClick={() => setNavMobile(true)} className="lg:hidden text-3xl text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
