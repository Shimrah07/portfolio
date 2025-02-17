import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shimrah Ahmed</h1>
        <p className={styles.description}>
          Frontend Developer | React.js Enthusiast{" "}
        </p>
        <p className={styles.description}>
          Passionate about building sleek, responsive, and user-friendly web
          applications with React.js. I love clean code, smooth UI/UX, and
          staying updated with the latest web trends.{" "}
        </p>
        <a
          href="mailto:shimrahahmedsa27@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
