import { useRef, useEffect, useState } from "react";

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

const Home = () => {

    const videoRefOne = useRef(null);
    const innerVideoRef = useRef(null);
    const postsRef = useRef(null);
    const frameRef = useRef(null);
    const frameHeaderRef = useRef(null);
    const frameFooterRef = useRef(null);
    const startRef = useRef(null);
    const mobileSectionRef = useRef(null);

    const [hideFrameVideo,setHideFrameVideo] = useState(false);
    const [zoomed,setZoomed] = useState(true);
    const [loading,setloading] = useState(true)

    useEffect(() => {
        videoRefOne?.current?.play();
    }, [videoRefOne]);

    useEffect(() => {
        innerVideoRef?.current?.play();
    }, [innerVideoRef]);

    const watchScroll = () => {
        
        const frameHeaderHeight = frameHeaderRef.current.offsetHeight;
        const frameFooterHeight = frameFooterRef.current.offsetHeight;
        const framePostsHeight = postsRef.current.offsetHeight;
        const frameHeight = frameRef.current.offsetHeight;
        const screenHeight = window.innerHeight;

        scroll = window.scrollY;
        let startVideoOpacity = 1;
        if (scroll > screenHeight / 2) {
            startVideoOpacity = 0;
        } else {
            startVideoOpacity = (screenHeight - 2 * scroll) / screenHeight
        }

        startRef.current.style.opacity = startVideoOpacity;
        startRef.current.style.visibility =  startVideoOpacity ? 'visible' : 'hidden';

        let mobileSectionStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            marginTop: 0
        };

        if (3 * scroll > screenHeight) {
            setZoomed(false);
        } else {
            setZoomed(true);
        }

        let postsTop = frameHeaderHeight;
        postsTop = frameHeaderHeight - (scroll - screenHeight / 2);
    
        if (framePostsHeight && scroll > framePostsHeight - frameHeight + frameFooterHeight + frameHeaderHeight + screenHeight / 2) {
            postsTop = frameHeight - frameFooterHeight - framePostsHeight;
            
            mobileSectionStyle = {
                position: 'relative',
                top: 0,
                left: 0,
                right: 0,
                marginTop: framePostsHeight - frameHeaderHeight + frameFooterHeight + 'px'
            };
        }
        
        mobileSectionRef.current.style.position = mobileSectionStyle.position;
        mobileSectionRef.current.style.top = mobileSectionStyle.top;
        mobileSectionRef.current.style.left = mobileSectionStyle.left;
        mobileSectionRef.current.style.right = mobileSectionStyle.right;
        mobileSectionRef.current.style.marginTop = mobileSectionStyle.marginTop;

        frameRef.current.style.opacity =  1 - startVideoOpacity;

        postsRef.current.style.top = postsTop + 'px';

        if (scroll > (screenHeight / 2)){
            setHideFrameVideo(true)
        }else{
            setHideFrameVideo(false)
        }
    }

    useEffect(() => {

        setTimeout(()=>{
            setloading(false);
        },1000);

        watchScroll();

        window.addEventListener('scroll', watchScroll);
        return (() => {
            window.removeEventListener('scroll', watchScroll);
        })
    }, []);


    return (
        <div>
            <div className={`${classes.loading} ${loading?'':classes.hide}`} />
            <div className={classes.videoWrapper} ref={startRef} >
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
                <div className={classes.mobileSection} ref={mobileSectionRef} >
                    <div className={`${classes.mobileWRapper} ${zoomed?classes.zoomed:""}`} ref={frameRef} >
                        <img src={posts} alt="" className={classes.posts} ref={postsRef} />
                        <img src={headerImage} alt="" className={classes.frameHeader} ref={frameHeaderRef} />
                        <img src={footerImage} alt="" className={classes.frameFooter} ref={frameFooterRef} />
                        <video
                            className={`${classes.innerVideo} ${hideFrameVideo ? classes.hide : ''}`}
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