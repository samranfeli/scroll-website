import { useEffect, useState } from "react";
import classes from "./TypeIn.module.css";
import { useAnimateOnScroll } from "../Hooks/UseAninateOnScroll";
import ScrollTrigger from "react-scroll-trigger";

const TypeIn = () => {
  const [typeRef, isVisible] = useAnimateOnScroll({
    threshold: 0,
    reapear: false,
  });

  const [animated, setAnimated] = useState(false);
  const [animated2, setAnimated2] = useState(false);
  const [animated3, setAnimated3] = useState(false);

  const onEnterViewport = () => {
    setAnimated(true);
  };

  const onExitViewport = () => {
    setAnimated(false);
  };
  const onEnterViewport2 = () => {
    setAnimated2(true);
  };

  const onExitViewport2 = () => {
    setAnimated2(false);
  };

  const onEnterViewport3 = () => {
    setAnimated3(true);
  };

  const onExitViewport3 = () => {
    setAnimated3(false);
  };

  const [didComeIn, setDidComeIn] = useState(false);

  const [visCount, setVisCount] = useState(0);

  useEffect(() => {
    const handleOpacity = () => {
      if (!didComeIn) {
        setVisCount((prev) =>
          typeRef.current.getBoundingClientRect().y > 0
            ? -1
            : prev >
              Math.floor(
                (3 -
                  (typeRef.current.offsetHeight -
                    Math.abs(typeRef.current.getBoundingClientRect().y)) /
                    typeRef.current.offsetHeight) *
                  1.5
              )
            ? prev
            : Math.floor(
                (3 -
                  (typeRef.current.offsetHeight -
                    Math.abs(typeRef.current.getBoundingClientRect().y)) /
                    typeRef.current.offsetHeight) *
                  1.5
              )
        );
      }
    };
    if (isVisible) {
      document.addEventListener("scroll", handleOpacity);
    }
    return () => {
      document.removeEventListener("scroll", handleOpacity, false);
    };
  }, [didComeIn, isVisible, typeRef]);

  useEffect(() => {
    if (visCount > 2) setDidComeIn(true);
  }, [visCount]);

  return (
    <div className={classes.main} ref={typeRef}>
      <ScrollTrigger onEnter={onEnterViewport} >
        <p
          className={`${classes.scrool_animate} ${animated && classes.animate}`}
        >
          Flibbo:<br/> Your all-in-one<br/> social  hub where social<br/> networking meets
          endless possibilities.
        </p>
      </ScrollTrigger>
      <ScrollTrigger onEnter={onEnterViewport2} >
        <p
          className={`${classes.scrool_animate} ${animated2 && classes.animate}`}
        >
          Read books, meditate, post videos, earn from impressions,<br/> offer
          subscriptions, and unlock NFT membership perks for monthly royalties.
        </p>
      </ScrollTrigger>
      <ScrollTrigger onEnter={onEnterViewport3} >
        <p
          className={`${classes.scrool_animate} ${animated3 && classes.animate}`}
        >
          It's social, it's creative, it's Flibbo
        </p>
      </ScrollTrigger>
    </div>
  );
};

export default TypeIn;
