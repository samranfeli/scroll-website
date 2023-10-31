import classes from "./Header.module.css";
import logo from "../Assets/Group.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  const scrollToThis = (e) => {
    setNavOpen(false);
    if (document.getElementById(e.target.href.split("#")[1]))
      document
        .getElementById(e.target.href.split("#")[1])
        .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        animation: !props.hideFirst && "unset",
        opacity: !props.hideFirst && 1,
      }}
      className={`${classes.header} ${props.visible && classes.visible}`}
    >
      <a href="#features" className={classes.logo}>
        <img src={logo} alt="Logo" />
      </a>
      <button
        className={classes.menuButton}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <AiOutlineMenu />
      </button>
      <nav className={`${classes.navMobile} ${!navOpen && classes.navHidden}`}>
        <a href="/#" onClick={scrollToThis} className={classes.navLink}>
          Home
        </a>
        <a href="http://market.flibbo.com" onClick={scrollToThis}>
          Market Place
        </a>
        <a href="/#features" onClick={scrollToThis}>
          Feature
        </a>
        <a href="https://pwa.flibbo.com">Login</a>
        <a href="/contact-us">Contact Us</a>
      </nav>
      <nav className={classes.navigation}>
        <a href="/#home" onClick={scrollToThis}>
          Home
        </a>
        <a href="http://market.flibbo.com" onClick={scrollToThis}>
          Market Place
        </a>
        <a href="#features" onClick={scrollToThis}>
          Feature
        </a>
        {/* <a href="#login" onClick={scrollToThis}>
          Login
        </a> */}
        <a href="/contact-us">Contact Us</a>
      </nav>
      <div className={classes.actions}>
        <a href="https://pwa.flibbo.com" className={classes.purple}>
          Login
        </a>
        <button className={classes.purple}>Download Flibbo</button>
      </div>
    </header>
  );
};

export default Header;
