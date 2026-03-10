import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={`${styles.hero} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}

          <span className={styles.eyebrow}>
            About ArchInxT
          </span>

          {/* Main Heading */}

          <h1 className="mt-6 text-5xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">

            Exploring the
            <span className={styles.gradient}> Architecture </span>
            of Modern Technology

          </h1>

          {/* Description */}

          <p className="mt-8 text-lg text-textMuted leading-relaxed max-w-2xl mx-auto">

            ArchInxT is built on a simple idea — technology becomes
            easier to understand when its structure is made visible.


          </p>

        </div>

        {/* Divider */}

        <div className={styles.divider}></div>

      </div>

    </section>
  );
};

export default AboutHero;