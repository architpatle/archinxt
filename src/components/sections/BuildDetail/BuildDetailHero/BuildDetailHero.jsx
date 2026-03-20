import { useEffect, useState } from "react";
import styles from "./BuildDetailHero.module.css";

const BuildDetailHero = ({ build }) => {

  if (!build) return null;

  const [current, setCurrent] = useState(0);

  const images = build.images?.length
    ? build.images
    : [build.image];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.wrapper}>

      <div className={styles.hero}>

        {/* CAROUSEL */}
        <div className={styles.carousel}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === current ? styles.active : ""
              }`}
            >
              <img src={img} alt="preview" />
            </div>
          ))}
        </div>

        {/* OVERLAY */}
        <div className={styles.overlay}></div>

        {/* CONTENT */}
        <div className={styles.content}>
          <h1 className={styles.title}>{build.title}</h1>

          {build.live && (
            <a
              href={build.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Live Preview
            </a>
          )}
        </div>

      </div>

    </section>
  );
};

export default BuildDetailHero;