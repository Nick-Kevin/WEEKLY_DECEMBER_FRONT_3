import React from "react";
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
          <p>©2021.</p>
        </div>
        <p className={styles.footer__logo__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.footer__logo__socialNetwork}></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Footer;
