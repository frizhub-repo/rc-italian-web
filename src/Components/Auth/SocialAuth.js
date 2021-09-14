import * as React from "react";
import classes from "./Auth.module.css";

export default function SocialAuth() {
  return (
    <div className={classes.socialAuthBtnsContainer}>
      <button className={classes.socialAuthBtn}>
        <img
          src="assets/facebook-auth.png"
          width={25}
          style={{ marginRight: "10px" }}
        />
        Login with Facebook
      </button>
      <button className={classes.socialAuthBtn}>
        <img
          src="assets/google-symbol.png"
          width={25}
          style={{ marginRight: "10px" }}
        />
        Login with Google
      </button>
      <button className={classes.socialAuthBtn}>
        <img
          src="assets/mobile-app.png"
          width={25}
          style={{ marginRight: "10px" }}
        />
        Login with your Food Discovery App
      </button>
    </div>
  );
}
