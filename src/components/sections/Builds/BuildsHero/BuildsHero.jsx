import styles from "./BuildsHero.module.css";

const BuildsHero = () => {
  return (
    <section className={`${styles.hero} relative`}>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}

          <span className={styles.eyebrow}>
            Builds
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-5xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">

            Turning ideas into real digital
            <span className={styles.gradient}>  products </span>

          </h1>

          {/* Description */}

          <p className="mt-8 text-lg text-textMuted leading-relaxed max-w-2xl mx-auto">

            Explore fully developed applications and digital
            experiences — crafted from concept to deployment
            with a focus on performance, usability, and impact.

          </p>

        </div>

        {/* Divider */}

        <div className={styles.divider}></div>

      </div>

    </section>
  );
};

export default BuildsHero;