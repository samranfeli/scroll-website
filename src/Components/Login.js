import classes from "./Login.module.css";
import front from "../Assets/download.png";
import back from "../Assets/Back.png";
import playStore from "../Assets/googleplay.png";
import appStore from "../Assets/appstore.png";

const Login = () => {
  return (
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
            <img src={playStore} alt="PlayStore" />
          </div>
          <div className={classes.icon}>
            <img src={appStore} alt="PlayStore" />
          </div>
        </div>
      </div>
      <div className={classes.image}>
        <div className={classes.front}>
          <img src={front} alt="front" />
        </div>
      </div>
    </div>
  );
};

export default Login;
