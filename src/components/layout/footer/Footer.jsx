import React from "react";
import GooglePodcast from "../../../assets/GooglePodcast.png";
import Spotify from "../../../assets/Spotify.png";
import Youtube from "../../../assets/Youtube.png";
import PlayStore from "../../../assets/PlayStore.png";
import AppStore from "../../../assets/AppStore.png";
import Instagram from "../../icons/Instagram.jsx";
import TikTok from "../../icons/TikTok.jsx";
import Twitter from "../../icons/Twitter.jsx";
import logo from "../../../assets/logo.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <div className={styles.footer__logo__heading}>
          <img
            src={logo}
            alt="logo podcast"
            className={styles.footer__logo_img}
          />
          <p className={styles.footer__logo_copyright}>©2021.</p>
        </div>
        <p className={styles.footer__logo__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.footer__logo__socialNetwork}>
          <Twitter />
          <Instagram />
          <TikTok />
        </div>
      </div>
      <div className={styles.footer__second}>
        <h4 className={styles.footer__second_about}>About</h4>
        <h4 className={styles.footer__second_testimonials}>Testimonials</h4>
        <h4 className={styles.footer__second_features}>Features</h4>
      </div>
      <div className={styles.footer__third}>
        <h4 className={styles.footer__third_episodes}>Episodes</h4>
        <h4 className={styles.footer__third_pricing}>Pricing</h4>
        <h4 className={styles.footer__third_blog}>Blog</h4>
      </div>
      <div className={styles.footer__last}>
        <p className={styles.footer_last__heading}>
          Listen to episodes on your fav platform:
        </p>
        <div className={styles.footer__last_platforms}>
          <img
            src={GooglePodcast}
            alt="googlePodcast"
            className={styles.footer__last_platforms_googlePodcast}
          />
          <img
            src={Spotify}
            alt="spotify"
            className={styles.footer__last_platforms_spotify}
          />
          <img
            src={Youtube}
            alt="youtube"
            className={styles.footer__last_platforms_youtube}
          />
        </div>
        <div className={styles.footer__last_app}>
          <p className={styles.footer__last_app_heading}>App available on:</p>
          <div className={styles.footer__last_app_icon}>
            <img
              src={AppStore}
              alt="AppStore"
              className={styles.footer__last_app_appStore}
            />
            <img
              src={PlayStore}
              alt="Playstore"
              className={styles.footer__last_app_playStore}
            />
          </div>
        </div>
      </div>

      <div className={styles.footer_copyrightContainer}>
        <hr className={styles.footer__divider} />

        <div className={styles.footer__copyright}>
          <p>
            ©2022. All Rights Reserved.{" "}
            <span className={styles.footer__copyright__podOfCast}>
              Pod of Cast
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
