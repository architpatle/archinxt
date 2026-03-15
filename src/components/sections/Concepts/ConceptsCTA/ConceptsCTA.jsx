import styles from "./ConceptsCTA.module.css";

const ConceptsCTA = () => {
  return (
    <section className={`${styles.cta} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className={styles.card}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
            Keep Exploring
            <span className={styles.gradientText}> Technology </span>
          </h2>

          <p className="mt-6 text-lg text-textMuted max-w-2xl mx-auto text-center">
            ArchInxT simplifies complex technology systems through
            visual explanations and structured thinking. Discover
            more concepts and continue learning.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <button className={styles.primaryBtn}>
              Explore More Concepts
            </button>

            <button className={styles.secondaryBtn}>
              Follow on LinkedIn
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ConceptsCTA;