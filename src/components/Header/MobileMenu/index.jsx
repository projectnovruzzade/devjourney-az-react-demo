// ! Mobile Menu Component
import React from "react";
import "./mobileMenu.scss";
import { CloseMenuIcon } from "../../Svgs/icons";
import { LinkedinIcon as Instgram} from "../../Svgs/icons"
import { InstagramIcon as Linkedin} from "../../Svgs/icons"

const MobileMenu = ({menuStuation,handlerCheckMenu}) => {
  return (
    <div className={`nav-part-mobile ${menuStuation ? "active" : ""}`}>
      <div className="close-menu-icon" onClick={handlerCheckMenu}>
        <CloseMenuIcon />
      </div>
      <main className="main-content">
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
        <div className="button-group">
          <a href="" class="btn-login">
            Login
          </a>
          <a href="" class="btn-register">
            Register
          </a>
        </div>
        <div className="social-icon-group">
          <a href="" className="linkedinAddress">
            <Linkedin />
          </a>
          <a href="" className="instagramAddress">
            <Instgram />
          </a>
        </div>
      </main>
    </div>
  );
};

export default MobileMenu;
