import { useEffect, useState, createRef } from "react";
import { useAnimateOnScroll } from "../Hooks/UseAninateOnScroll";
import classes from "./Features.module.css";
import cardImage4 from "../Assets/video/Bronze _Res 360.mp4";
import cardImage2 from "../Assets/video/Gold_Res 360.mp4";
import cardImage from "../Assets/video/Platinum_Res 360.mp4";
import cardImage3 from "../Assets/video/Silver_Res 360.mp4";
import cardImage5 from "../Assets/video/Starter_Res 360.mp4";
import Frame1 from "../Assets/Frame1.png";
import Frame2 from "../Assets/Frame2.png";
import Frame3 from "../Assets/Frame3.png";
import Image1 from "../Assets/New folder/Rectangle 6228.png";
import Image2 from "../Assets/New folder/Rectangle 6229.png";
import Image3 from "../Assets/New folder/Rectangle 6230.png";
import Image4 from "../Assets/New folder/Rectangle 6231.png";
import Image5 from "../Assets/New folder/Rectangle 6232.png";
import ScrollTrigger from "react-scroll-trigger";
import StarterVideo from "../Assets/new_videos/starter.mp4";
import BronzeVideo from "../Assets/new_videos/bronze.mp4";
import SilverVideo from "../Assets/new_videos/silver.mp4";
import GoldVideo from "../Assets/new_videos/gold.mp4";
import PlatinumVideo from "../Assets/new_videos/platinum.mp4";

const Features = () => {
  const [cardsRef, cardsVisible] = useAnimateOnScroll({
    threshold: 0,
    reapear: true,
  });

  const [playVideoRef, setPlayVideoRef] = useState([]);
  const [playVideoRefMobile, setPlayVideoRefMobile] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function handleChange() {
      setIsMobile(mediaQuery.matches);
    }

    handleChange();
    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

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

  const [frontCard, setFrontCard] = useState(0);

  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const handleCards = () => {
      setFrontCard(
        cardsRef.current.getBoundingClientRect().y > 0
          ? 0
          : Math.abs(
              Math.floor(
                cardsRef.current.getBoundingClientRect().y /
                  (cardsRef.current.offsetHeight / 7)
              )
            ) - 1
      );
      setIntensity(
        cardsRef.current.getBoundingClientRect().y > 0
          ? 0
          : Math.abs(
              (cardsRef.current.getBoundingClientRect().y %
                (cardsRef.current.offsetHeight / 7)) /
                (cardsRef.current.offsetHeight / 7)
            )
      );
    };

    if (cardsVisible) {
      document.addEventListener("scroll", handleCards);
    }
    return () => {
      document.removeEventListener("scroll", handleCards, false);
    };
  }, [cardsRef, cardsVisible]);

  const cards = [
    {
      cardImage: StarterVideo,
      text: (
        <>
          Membership Card - Silver
          <br />
          <br />
          - Royalty income for holders
          <br />
          - Impression-Based Monetization
          <br />
          - Access virtual MasterCard
          <br />
          - Free ad credit
          <br />
          - Full access to App Features
          <br />
          -Subscription-Based Earnings
          <br />
          <br />
          <div style={{ textAlign: "center" }}>$1000</div>
        </>
      ),
    },

    {
      cardImage: BronzeVideo,
      text: (
        <>
          Membership Card - Silver
          <br />
          <br />
          - Royalty income for holders
          <br />
          - Impression-Based Monetization
          <br />
          - Access virtual MasterCard
          <br />
          - Free ad credit
          <br />
          - Full access to App Features
          <br />
          -Subscription-Based Earnings
          <br />
          <br />
          <div style={{ textAlign: "center" }}>$1000</div>
        </>
      ),
    },

    {
      cardImage: SilverVideo,
      text: (
        <>
          Membership Card - Silver
          <br />
          <br />
          - Royalty income for holders
          <br />
          - Impression-Based Monetization
          <br />
          - Access virtual MasterCard
          <br />
          - Free ad credit
          <br />
          - Full access to App Features
          <br />
          -Subscription-Based Earnings
          <br />
          <br />
          <div style={{ textAlign: "center" }}>$1000</div>
        </>
      ),
    },

    {
      cardImage: GoldVideo,
      text: (
        <>
          Membership Card - Silver
          <br />
          <br />
          - Royalty income for holders
          <br />
          - Impression-Based Monetization
          <br />
          - Access virtual MasterCard
          <br />
          - Free ad credit
          <br />
          - Full access to App Features
          <br />
          -Subscription-Based Earnings
          <br />
          <br />
          <div style={{ textAlign: "center" }}>$1000</div>
        </>
      ),
    },

    {
      cardImage: PlatinumVideo,
      text: (
        <>
          Membership Card - Silver
          <br />
          <br />
          - Royalty income for holders
          <br />
          - Impression-Based Monetization
          <br />
          - Access virtual MasterCard
          <br />
          - Free ad credit
          <br />
          - Full access to App Features
          <br />
          -Subscription-Based Earnings
          <br />
          <br />
          <div style={{ textAlign: "center" }}>$1000</div>
        </>
      ),
    },
  ];

  const fBlock = (
    <div className={classes.featureBlock}>
      <div className={classes.image}>
        <img src={Frame2} alt="smiling" />
      </div>
      <div className={classes.description}>
        <p className={classes.bigText}>Create, share, and monetize</p>
        <p className={classes.smallText}>
          Share content in any format, from photos and videos to links, texts,
          and even voice posts. Turn monthly impressions into earnings.
        </p>
        {/* <div className={classes.icons}>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Advance analytics</p>
          </div>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Easy Payment</p>
          </div>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Fully integrated</p>
          </div>
        </div>*/}
      </div>
    </div>
  );
  const fBlock2 = (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div dir="rtl" className={classes.featureBlock}>
        <div className={classes.image}>
          <img src={Frame3} alt="smiling" />
          <img
            className={`${classes.image_img5} ${animated && classes.animate}`}
            src={Image5}
            alt="smiling"
          />
          <img
            className={`${classes.image_img4} ${animated && classes.animate}`}
            src={Image4}
            alt="smiling"
          />

          <img
            className={`${classes.image_img} ${animated && classes.animate}`}
            src={Image1}
            alt="smiling"
          />
          <img
            className={`${classes.image_img2} ${animated && classes.animate}`}
            src={Image2}
            alt="smiling"
          />
          <img
            className={`${classes.image_img3} ${animated && classes.animate}`}
            src={Image3}
            alt="smiling"
          />
        </div>
        <div dir="ltr" className={classes.description}>
          <p className={classes.bigText}>Explore section</p>
          <p className={classes.smallText}>
            In Flibbo's Explore section, enjoy free access to book highlights
            and your favorite books across all categories. Plus, meditate,
            listen to a variety of relaxing music, discover affirmations, mind
            spa, health tips, self-growth, and more—all at no cost.
          </p>
          {/* <div className={classes.icons}>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Advance analytics</p>
          </div>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Easy Payment</p>
          </div>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Fully integrated</p>
          </div>
        </div>*/}
        </div>
      </div>
    </ScrollTrigger>
  );
  const fBlock3 = (
    <div className={classes.featureBlock}>
      <div className={classes.image}>
        <img src={Frame1} alt="smiling" />
      </div>
      <div className={classes.description}>
        <p className={classes.bigText}>Membership Card</p>
        <p className={classes.smallText}>
          Explore enhanced benefits as a Flibbo member through membership card:
          receive monthly royalty income, earn based on impressions and creator
          revenue, gain access to a virtual Mastercard, enjoy free ad account
          credits, and enable profile subscription earnings from your followers
        </p>
        {/*  <div className={classes.icons}>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Advance analytics</p>
          </div>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Easy Payment</p>
          </div>
          <div className={classes.iconItem}>
            <TickIcon />
            <p className={classes.iconDesc}>Fully integrated</p>
          </div>
        </div> */}
      </div>
    </div>
  );

  const arrLength = cards.length;

  useEffect(() => {
    // add or remove refs
    setPlayVideoRef((elRefs) =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
    setPlayVideoRefMobile((elRefs) =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  useEffect(() => {
    if (playVideoRef?.length > 0) {
      playVideoRef?.map((item) => {
        item?.current?.play();
      });

      //console.log(playVideoRef);
    }
    if (playVideoRefMobile?.length > 0) {
      playVideoRefMobile?.map((item) => {
        item?.current?.play();
      });

      //console.log(playVideoRef);
    }
  }, [playVideoRef, playVideoRefMobile]);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h3 className={classes.title} id="features">
          Flibbo Features
        </h3>
        {/*   <p className={classes.bCopy}>
          Whether you're a solo professional, a small business, or a large
          corporation, we have a plan that's right for you. 
        </p> */}
        {fBlock}
        {fBlock2}
        {fBlock3}
      </div>
      <div className={classes.scary}>
        <h1>Membership Card</h1>
        {/*    <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>*/}
      </div>
      <div className={classes.cardsRef} ref={cardsRef} id="testimonials">
        {isMobile ? (
          <div className={classes.cards}>
            {cards.map((card, i) => (
              <div className={classes.card} key={i}>
                <div
                  style={{ position: "relative" }}
                  className={classes.cardImage}
                >
                  <video
                    ref={playVideoRefMobile[i]}
                    loop
                    muted
                    playsInline
                    style={
                      {
                        // maxWidth: "230px",
                        // maxHeight: "40vh",
                        // zIndex: i === frontCard ? 10 : 1,
                        // filter: i === frontCard ? "none" : "blur(25px)",
                        // position: i === frontCard ? "fixed" : "unset",
                        // left: i === frontCard ? "50%" : "0",
                        // top: i === frontCard ? "0" : "0",
                        // transform: i === frontCard && `translate(-50%, 15%)`,
                      }
                    }
                    alt="cardImage"
                  >
                    <source src={card.cardImage} type="video/mp4" />
                  </video>
                  {/* <p
                    style={{
                      position: "fixed",
                      fontSize: "13px",
                      background: "#00000045",
                      padding: "15px",
                      top: "45vh",
                      left: "10%",
                      width: "75%",
                      zIndex: i === frontCard ? 10 : 1,
                      display: i === frontCard ? "block" : "none",
                      opacity: intensity + 0.3,
                    }}
                  >
                    {card.text}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={classes.cards}>
            {cards.map((card, i) => (
              <div className={classes.card} key={i}>
                <div
                  style={{ position: "relative" }}
                  className={classes.cardImage}
                >
                  <video
                    ref={playVideoRef[i]}
                    playsInline
                    loop
                    muted
                    style={
                      {
                        // zIndex: i === frontCard ? 10 : 1,
                        // filter: i === frontCard ? "none" : "blur(25px)",
                        // transform:
                        //   i === frontCard &&
                        //   `translateY(-${intensity * 10}%) scale(${
                        //     1 + intensity * 0.1
                        //   })`,
                      }
                    }
                    alt="cardImage"
                  >
                    <source src={card.cardImage} type="video/mp4" />
                  </video>
                  {/* <p
                    style={{
                      position: "absolute",
                      fontSize: "17px",
                      background: "#00000045",
                      padding: "15px",
                      top: "0",
                      left:
                        frontCard === 4
                          ? "-210%"
                          : frontCard === 3
                          ? "-210%"
                          : "120%",
                      width: "200%",
                      zIndex: i === frontCard ? 10 : 1,
                      display: i === frontCard ? "block" : "none",
                      opacity: intensity + 0.3,
                    }}
                  >
                    {card.text}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
