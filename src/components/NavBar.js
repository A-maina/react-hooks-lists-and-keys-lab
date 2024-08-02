import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks = links.map((link, index) => (
    <a href={`#${link}`} key={index}>
      {link}
    </a>
  ));
  return <nav>{navLinks}</nav>;
}

export default NavBar;
