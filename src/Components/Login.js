import classes from "./Login.module.css";
import front from "../Assets/download.png";
import back from "../Assets/Back.png";
import playStore from "../Assets/googleplay.png";
import appStore from "../Assets/appstore.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="downloads" className={classes.wrapper} >
      <div className={classes.main}>
        <div className={classes.text}>
          <p className={classes.bigText} id="login">
            Download Flibbo App
          </p>
          <p className={classes.smallText}>
              create your social account to stay<br/>
            connected with other creators and friends while enjoying all the app’s
            features.
          </p>
          <div className={classes.icons}>
            <div className={classes.icon}>
              <Link to="https://play.google.com/store/apps/details?id=com.flibbo.app" target="_blank">
                <img src={playStore} alt="PlayStore" />
              </Link>
            </div>
            <div className={classes.icon}>
              <Link to='https://apps.apple.com/us/app/flibbo-ai-powered-social-media/id6470238006' target="_blank">
                <img src={appStore} alt="PlayStore" />
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.image}>
          <div className={classes.front}>
            <img src={front} alt="front" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
