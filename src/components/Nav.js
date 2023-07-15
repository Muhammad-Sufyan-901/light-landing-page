import React from "react";

function Nav({ content }) {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-12 font-secondary">
        {content.map((title, index) => (
          <li key={index} className={title === "Sign Up" ? "btn" : "nav-link"}>
            <a href="/#">{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
