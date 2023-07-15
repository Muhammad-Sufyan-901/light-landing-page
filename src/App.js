import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Banner, Experience, Explore, Header, Headsets, NavMobile, Testimonial, Video } from "./components";
import "aos/dist/aos.css";

function App() {
  const [navMobile, setNavMobile] = useState(false);
  const navbarContent = ["Home", "Company", "Features", "Sign Up"];

  useEffect(() =>
    Aos.init({
      duration: 2500,
      delay: 400,
    })
  );

  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Header content={navbarContent} setNavMobile={setNavMobile} />
      <Banner />
      {/* Mobile Nav */}
      <div className={`${navMobile ? "right-0" : "-right-full"} fixed top-0 bottom-0 w-48 transition-all`}>
        <NavMobile content={navbarContent} setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
    </div>
  );
}

export default App;
