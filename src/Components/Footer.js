import { useEffect, useRef, useState } from "react";
import { useAnimateOnScroll } from "../Hooks/UseAninateOnScroll";
import classes from "./Footer.module.css";
import footImage from "../Assets/footer/1.png";
import footImage2 from "../Assets/footer/2.png";
import footImage3 from "../Assets/footer/3.png";
import footImage4 from "../Assets/footer/4.png";
import footImage5 from "../Assets/footer/5.png";
import { FaTelegram, FaInstagram, FaWhatsapp, FaTwitter, FaMediumM, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaMedium, FaX, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [footerRef, isFooterVisible] = useAnimateOnScroll({
    threshold: 0,
    reapear: true,
  });

  const indicRef = useRef(null);

  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    const handleFooterScroll = () => {
      setCurrentScroll(
        (indicRef.current.getBoundingClientRect().y + window.innerHeight) /
          (3 * (0.9 * window.innerHeight) - 5 * 16)
      );
    };
    const element = footerRef.current;
    if (isFooterVisible) {
      element.addEventListener("scroll", handleFooterScroll);
    }
    return () => {
      element.removeEventListener("scroll", handleFooterScroll, false);
    };
  }, [footerRef, isFooterVisible]);

  const image = (
    <div className={classes.image}>
      <img src={footImage} alt="footImage" />
    </div>
  );
  const image2 = (
    <div className={classes.image}>
      <img src={footImage2} alt="footImage" />
    </div>
  );
  const image3 = (
    <div className={classes.image}>
      <img src={footImage3} alt="footImage" />
    </div>
  );
  const image4 = (
    <div className={classes.image}>
      <img src={footImage4} alt="footImage" />
    </div>
  );
  const image5 = (
    <div className={classes.image}>
      <img src={footImage5} alt="footImage" />
    </div>
  );

  return (
    <footer className={classes.main} ref={footerRef}>
      <div className={classes.text}>
        <p className={classes.big}>Stay Connected !</p>
        <div className={classes.input}>
          <input placeholder="YOUR EMAIL" />
          <button>Sign up</button>
        </div>
        <div className={classes.social}>
          {/* <TelegramIcon /> */}
          
          <FaInstagram style={{marginBottom:"5px"}} color="#fff" />
          <FaXTwitter style={{marginBottom:"5px"}} color="#fff" />
          <FaMedium  color="#fff" />

          <FaTiktok style={{marginBottom:"7px"}}  color="#fff" />
          <FaYoutube  color="#fff" />
          <FaEnvelope style={{marginBottom:"1px"}}  color="#fff" />
        </div>
        {/* <div className={classes.links}>
          <div className={classes.linkBox}>
            <p>EXPLORE</p>
            <p>FEATURES</p>
            <p>PRICE</p>
            <p>TEAM</p>
          </div>
          <div className={classes.linkBox}>
            <p>TEMPLATE</p>
            <p>STYLE GUIDE</p>
            <p>LICENSING</p>
            <p>INSTRUCTIONS</p>
            <p>CHANGE LOG</p>
          </div>
          <div className={classes.linkBox}>
            <p>SOCIAL MEDIA</p>
            <p>LINKDIN</p>
            <p>FACEBOOK</p>
            <p>INSTAGRAM</p>
          </div>
        </div> */}
      </div>
      <div className={classes.pictures}>
        <div className={classes.parent}>
          <div
            className={classes.row}
            style={{ transform: `translateY(-${currentScroll * 35}%)` }}
          >
            {image}
            {image2}
          </div>
        </div>
        <div className={classes.parent}>
          <div
            className={classes.row}
            style={{ transform: `translateY(-${currentScroll * 30}%)` }}
          >
            {image3}
            {image4}
            {image}
          </div>
        </div>
        <div className={classes.parent}>
          <div
            className={classes.row}
            style={{ transform: `translateY(-${currentScroll * 25}%)` }}
          >
            {image3}
            {image5}
          </div>
        </div>
      </div>
      <div className={classes.container} ref={indicRef} />
    </footer>
  );
};

export default Footer;
