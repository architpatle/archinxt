import styles from "./AboutCTA.module.css";

const AboutCTA = () => {
  return (
    <section className={`${styles.cta} relative`}>

        
       

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className={styles.card}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
            Continue Exploring
            <span className={styles.gradientText}> ArchInxT </span>
          </h2>

          <p className="mt-6 text-lg text-textMuted max-w-2xl mx-auto text-center">
            Dive deeper into technology concepts, frontend design explorations,
            and insights that simplify how modern digital systems are built.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <button className={styles.primaryBtn}>
              Explore Concepts
            </button>

            <button className={styles.secondaryBtn}>
              View Designs
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutCTA;