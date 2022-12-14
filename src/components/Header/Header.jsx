import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [

  {
    display: "About",
    url: "#about",
  },
  {
    display: "Services",
    url: "#services",
  },

  {
    display: "Contact",
    url: "#contact",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header bgColor="#0a2b1e" className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex logo align-items-center gap-1">
              <b>
                <i className="ri-book-open-line "></i>{" "}
                <a href="#hero">SIZAKUWA</a>
              </b>
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>
                      <b className="nav-links">{item.display}</b>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i className="fa-brands  fa-tiktok fa-2xl"></i>{" "}
                </span>
                <b className="phoneNumber">studywithsiza</b>
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
