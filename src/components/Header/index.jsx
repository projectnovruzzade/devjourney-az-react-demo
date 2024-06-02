// ! Header Component
import React, { useState } from "react";
import "./header.scss";
import { LogoIcon } from "../Svgs/icons";
import { CloseMenuIcon } from "../Svgs/icons";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuStuation, setMenuData] = useState(false);

  const handlerCheckMenu = () => {
    if (menuStuation) setMenuData(false);
    else setMenuData(true);
    console.log(menuStuation);
  };

  return (
    <header id="header">
      <div className="logo-part">
        <div className="logo-content">
          <h1>
            Dev<span>journey</span>
          </h1>
          <span className="icon">
            <LogoIcon />
          </span>
        </div>
        {/* mobile */}
        <div className="menu-mobile-icon" onClick={handlerCheckMenu}>
          <span className="line line-1"></span>
          <span className={`line line-2 active`}></span>
          <span className="line line-3"></span>
        </div>
      </div>

      <div className="nav-part">
        <nav>
          <ul>
            <li>
              <a href="">Discover</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <button>
          <a href="">Let's start!</a>
        </button>
      </div>
      {/* mobile */}
      <MobileMenu menuStuation={menuStuation} handlerCheckMenu={handlerCheckMenu}/>
    </header>
  );
};

export default Header;
