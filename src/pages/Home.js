import { useRef,useEffect,useState } from "react";

import Features from "../Components/Features";
import Login from "../Components/Login";
import Footer from "../Components/Footer";
import TypeIn from "../Components/TypeIn";

import video1 from "../Assets/video/bg_video.mp4";
import flibboBlack from "../Assets/Flibbo Black.svg";
import mobileFrame from "../Assets/apple-iphone-14-max-2022-medium.png";

import footerImage from "../Assets/Frame 40 (2).svg";
import posts from "../Assets/Final.png";
import headerImage from "../Assets/Frame 39.png";


import classes from './Home.module.css';

const Home = props => {
    
    const videoRefOne = useRef(null);
    const innerVideoRef = useRef(null);

    const [scroll,setScroll] = useState(0);
    const [screenHeight,setScreenHeight] = useState(0);
    

      useEffect(()=>{
        videoRefOne?.current?.play();
      },[videoRefOne]);

      useEffect(()=>{
        innerVideoRef?.current?.play();
      },[innerVideoRef]);


      const watchScroll = () => {
        //console.log("window.screenY",window.scrollY);
        setScroll(window.scrollY);
      }

      useEffect(()=>{
        watchScroll();
        document.addEventListener('scroll', watchScroll);
        setScreenHeight(window.innerHeight);
        return(()=>{
            document.removeEventListener('scroll', watchScroll);
        })
      },[]);
      
      console.log("state : ", scroll);
      console.log("screenHeight : ", screenHeight);

      let startVideoOpacity = 1;
      if (scroll > screenHeight){
        startVideoOpacity = 0;
      }else{
        startVideoOpacity = (screenHeight - scroll)/screenHeight
      }
      let mobileSectionStyle = {
        position:'fixed',
        top:0,
        left:0,
        right:0
      };
    //   if (scroll > screenHeight){
    //     mobileSectionStyle = {
    //         position:'fixed',
    //         top:0,
    //         left:0,
    //         right:0
    //     }
    //   }else{
    //     mobileSectionStyle = {
    //         position:'static',
    //         top:0,
    //         left:0,
    //         right:0
    //     }
    //   }
    let frameScale = 5;
    if (scroll> screenHeight){
        frameScale = 1;
    }else{
        frameScale =  4*(screenHeight - scroll)/screenHeight + 1
    }
    return(
        <div>
            <div className={classes.videoWrapper} style={{opacity:startVideoOpacity,visibility:startVideoOpacity?'visible':'hidden'}}>
                <video
                    className={classes.startVideo}
                    playsInline
                    loop
                    muted
                    ref={videoRefOne}
                >
                    <source src={video1} type="video/mp4" />
                </video>
                <div className={classes.textOnVideo}>
                    <h1 className={classes.title}>Your Path To Mindful Socialising</h1>
                    <img src={flibboBlack} alt="flibbo" />
                </div>
            </div>

            <div className={classes.main} >
                <div className={classes.mobileSection} style={mobileSectionStyle}>
                    <div className={classes.mobileWRapper} style={{transform:`scale(${frameScale})`,opacity:1-startVideoOpacity}}>
                        <img src={headerImage} alt="" className={classes.frameHeader} />
                        <img src={footerImage} alt="" className={classes.frameFooter} />
                        <video
                            className={`${classes.innerVideo} ${scroll > (screenHeight+100) ? classes.hide : ''}`}
                            playsInline
                            loop
                            muted
                            ref={innerVideoRef}
                        >
                            <source src={video1} type="video/mp4" />
                        </video>
                        <img src={mobileFrame} alt="frame" className={classes.frame} />
                    </div>
                </div>



                <TypeIn />
                <Features />
                <Login />
                <Footer />

            </div>
        </div>
    )
}

export default Home;