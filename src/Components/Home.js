import { Fragment, useEffect, useRef, useState } from "react";
import { useAnimateOnScroll } from "../Hooks/UseAninateOnScroll";
import classes from "./Home.module.css";
import frame from "../Assets/apple-iphone-14-max-2022-medium.png";
import userImage from "../Assets/Profile main holder at menu.png";
import footerImage from "../Assets/Frame 40 (2).svg";
import posts from "../Assets/Final.png";
import logo from "../Assets/Flibbo Black.svg";
import video from "../Assets/video/bg_video.mp4";

import headerImage from "../Assets/Frame 39.png";

export const clamp = (value, threshold) =>
  value > threshold ? threshold : value;

export const reverseClamp = (value, threshold) =>
  value < threshold ? threshold : value;

const Home = (props) => {
  const [homeRef, isVisible] = useAnimateOnScroll({
    threshold: 0,
    reapear: true,
  });

  const videoRefOne = useRef(null);
  const videoRefTwo = useRef(null);

  const [videoIsLoaded, setVideoIsLoaded] =useState(false);

  const [zoomedInRef, isZoomedIn] = useAnimateOnScroll({
    threshold: 0,
    reapear: true,
  });

  const [lockRef, isLocked] = useAnimateOnScroll({
    threshold: 0,
    reapear: true,
  });

  const [postsRef, isPostsScrolling] = useAnimateOnScroll({
    threshold: 0,
    reapear: true,
  });

  const [heroOpacity, setHeroOpacity] = useState(1);

  const [zoomLevel, setZoomLevel] = useState(2.5);

  const [postsScroll, setPostsScroll] = useState(0);

  useEffect(() => {
    const handleOpacity = () => {
      if (isPostsScrolling) {
        setHeroOpacity(
          (lockRef.current.offsetHeight -
            Math.abs(lockRef.current.getBoundingClientRect().y * 4)) /
            lockRef.current.offsetHeight
        );
      } else {
        setHeroOpacity(0);
      }
    };
    if (isLocked) {
      document.addEventListener("scroll", handleOpacity);
    } else
      return () => {
        document.removeEventListener("scroll", handleOpacity, false);
      };
  }, [isLocked, lockRef, isPostsScrolling]);

  useEffect(() => {
  //  if ( (postsRef.current.getBoundingClientRect().y /
  //  window.innerHeight) === "-2.011422637590862" ) {

  //  }
    const handlePostsScroll = () => {
      setZoomLevel(
        postsRef.current.getBoundingClientRect().y < 0
          ? 1
          : reverseClamp(
              (postsRef.current.getBoundingClientRect().y /
                window.innerHeight) *
                ((0.9 * window.innerWidth * 2276) / 1000 / window.innerWidth),
              1
            )
      );

      setPostsScroll(
        postsRef.current.getBoundingClientRect().y > 0
          ? 0
          : clamp(
              Math.abs(postsRef.current.getBoundingClientRect().y) /
                window.innerHeight,
              1
            )
      );
    };
    if (!isPostsScrolling) setZoomLevel(2.5);
    if (isPostsScrolling) {
      document.addEventListener("scroll", handlePostsScroll);
    }
    return () => {
      document.removeEventListener("scroll", handlePostsScroll, false);
    };
  }, [isPostsScrolling, postsRef]);

  useEffect(() => {
    props.onToggleVisibility(isVisible);
  }, [isVisible, props]);

  setTimeout(() => {
    videoRefOne?.current?.play();
    videoRefTwo?.current?.play();
  }, [500]);

  const setLoaded = ()=>{setVideoIsLoaded(true)};
  useEffect(()=>{
    debugger;
    const video = document.getElementById('startScreen');
    video?.addEventListener('loadeddata',setLoaded);
    return(()=>{
      video?.removeEventListener('loadeddata', setLoaded);
    });
  },[]);

  console.log(zoomLevel);
  return (

    <div className={classes.main} ref={homeRef}>
      <div ref={zoomedInRef} className={classes.zoomRef} id="home">
        <div ref={lockRef} className={classes.lockRef} />
        <div ref={postsRef} className={classes.postsRef} />
      </div>

      {videoIsLoaded && <div
        className={classes.mobile}
        style={{
          display: isVisible ? undefined : "none",
          marginTop: "-100%",
          transform: `scale(${zoomLevel !== 2.5 && zoomLevel !== 1 ? zoomLevel * 1.7 : 1}) `,
          transition: `all ${
            isZoomedIn === undefined ? 0 : "var(--transTime)"
          }`,
          animation: !isZoomedIn && "none",
          backgroundImage: (!isLocked || !isZoomedIn) && "unset",
        }}
      >
        <div className={`${classes.frame}`}>
          <img src={frame} alt="frame" className={classes.image} />
          {postsScroll === 0 ? (
            <video
              ref={videoRefOne}
              playsInline
              loop
              muted
              className={classes.video2}
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <Fragment>
              <div className={classes.mobileHeader}>
                <img src={headerImage} alt="klds" />
              </div>
              <img
                className={classes.postImage}
                src={posts}
                alt="kj"
                style={{
                  transform: `translate(-50% , -${clamp(
                    postsScroll * 65 - 10,
                    60
                  )}%)`,
                }}
              />
              <div className={classes.mobileFooter}>
                <img
                  className={classes.footerIcons}
                  src={footerImage}
                  alt="nbjsd"
                />
              </div>
            </Fragment>
          )}
        </div>
      </div>}
      
      <div
        className={`${classes.hero}   `}
        style={{
          opacity: heroOpacity,
        }}
      >
        <video
          ref={videoRefTwo}
          playsInline
          loop
          muted
          className={classes.video}
          id="startScreen"
        >
          <source src={video} type="video/mp4" />
        </video>

        <p className={classes.textHeader} style={{ zIndex: "2" }}>
          Your Path To Mindful Socialising{" "}
        </p>
        <p style={{ zIndex: "2" }} className={classes.smallText}>
          {" "}
          <img className={classes.logo} src={logo} />
        </p>
      </div>
      
    </div>
  );
};

export default Home;
