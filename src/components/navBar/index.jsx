import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.scss";
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink]= useState(0)

  const handleActiveLink = (index) => {
    setActiveLink(index)
  }

  console.log(activeLink)

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to={"/"} className="navbar__container__logo">
          <FaReact size={30} />
        </Link>
      </div>
      <div className="navbar__container__menu">
        {data.map((item, index) => (
          <p key={index} className="navbar__container__menu__item" id="menuLink" onClick={() => handleActiveLink(index)}>
            <Link to={item.to} className={activeLink === index ? "navbar__container__menu__item__links activeLink" : "navbar__container__menu__item__links"}>
              {item.label}
            </Link>
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;