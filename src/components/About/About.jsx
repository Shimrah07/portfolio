import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a lappy"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
            <div className={styles.aboutItemtext}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in creating responsive, optimized, and visually
                appealing websites. With expertise in HTML, CSS, JavaScript, and
                modern frameworks like React, I focus on building seamless user
                interfaces that enhance user experience.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="uiIcon" />
            <div className={styles.aboutItemtext}>
              <h3>Responsive & Cross-Browser Development</h3>
              <p>
                Ensuring seamless performance across all devices, I implement
                responsive design principles using CSS Flexbox, Grid, and media
                queries. I also optimize for cross-browser compatibility to
                deliver consistent user experiences.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
            <div className={styles.aboutItemtext}>
              <h3>Web Performance & Optimization</h3>
              <p>
                I prioritize fast-loading web applications by implementing best
                practices like lazy loading, code splitting, and asset
                optimization. Leveraging tools like Lighthouse and Web Vitals, I
                continuously improve performance and accessibility.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
