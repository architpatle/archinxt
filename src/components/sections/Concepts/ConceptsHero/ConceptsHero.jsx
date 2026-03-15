import styles from "./ConceptsHero.module.css";

const ConceptsHero = () => {
  return (
    <section className={`${styles.hero} relative`}>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}

          <span className={styles.eyebrow}>
            Concepts
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-5xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">

            Understanding the concepts of
            <span className={styles.gradient}> Modern Technology </span>
        

          </h1>

          {/* Description */}

          <p className="mt-8 text-lg text-textMuted leading-relaxed max-w-2xl mx-auto">

            Explore key technology concepts that power modern
            digital systems — from networking and performance
            to AI infrastructure and web architecture.

          </p>

        </div>

        {/* Divider */}

        <div className={styles.divider}></div>

      </div>

    </section>
  );
};

export default ConceptsHero;