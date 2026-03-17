import styles from "./DesignHero.module.css";

const DesignHero = () => {
  return (
    <section className={`${styles.hero} relative`}>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}

          <span className={styles.eyebrow}>
            UI Design Showcase
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-5xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">

            Crafting Interfaces That Feel
            <span className={styles.gradient}> Intuitive </span>

          </h1>

          {/* Description */}

          <p className="mt-8 text-lg text-textMuted leading-relaxed max-w-2xl mx-auto">

            Explore modern UI designs focused on clarity, usability,
            and visual experience — from dashboards to product interfaces
            built with thoughtful design systems.

          </p>

        </div>

        {/* Divider */}

        <div className={styles.divider}></div>

      </div>

    </section>
  );
};

export default DesignHero;