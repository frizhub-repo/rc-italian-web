import React from "react";
import { useStyles } from "./footerStyles";
import classNames from "classnames";
import facebook from "images/facebook.png";
import myBusiness from "images/my-business.png";
import instagram from "images/instagram.png";
import { useUserContext } from "Context/userContext";

function FooterItalian() {
  const classes = useStyles();
  let { restaurant } = useUserContext();

  return (
    <footer className={`${classes.footerRoot}`}>
      <div className={classes.container}>
        <div className={classes.txtContainer}>
          <span className={classes.heading}>
            {restaurant?.restaurant?.name ?? "Uncle Sammy"}
          </span>
          <div className={classes.uncleSammyTxt}>
            <p>
              <span className={classes.vatNumber}>VAT: </span>651354613161355
            </p>
            <p>
              <span className={classes.vatNumber}>Registered Office: </span>
              {restaurant?.placeData?.formatted_address}
            </p>
            <p>
              <span className={classes.vatNumber}>PEC: </span>starters@cafe.com
            </p>
          </div>
        </div>

        <div
          className={classNames(classes.txtContainer, classes.leftRightBorder)}
        >
          <div className={classes.newsLetter}>
            <span className={classes.heading}>NewsLetter</span>
          </div>
          <div className={classes.subscribeRoot}>
            <span className={classes.subscribeTxt}>
              Subscribe to get our amazing discounts and events!
            </span>
            <div className={classes.subscribeBtnRoot}>
              <button className={classes.emailbtn}>Email</button>
              <button className={classes.subscribeBtn}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={classes.txtContainer}>
          <span className={classes.heading}>Useful Links</span>
          <div className={classes.termCond}>
            <p>
              Cookie Policy <br />
              Terms & Conditions
            </p>
            <div className={classes.socialImg}>
              <a>
                <img src={facebook} width={30} />
              </a>
              <a>
                <img src={instagram} width={30} />
              </a>
              <a>
                <img src={myBusiness} width={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.allRight}>
        <span className={classes.allRightTxt}>
          @2021 Restaurants Club. All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default FooterItalian;
