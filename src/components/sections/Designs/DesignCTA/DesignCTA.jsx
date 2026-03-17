import styles from "./DesignCTA.module.css";

const DesignCTA = () => {
  return (
    <section className={`${styles.cta} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className={styles.card}>

          {/* Heading */}

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
            Designing Experiences
            <span className={styles.gradientText}> That Matter </span>
          </h2>

          {/* Description */}

          <p className="mt-6 text-lg text-textMuted max-w-2xl mx-auto text-center">
            Great design is more than visuals — it’s about clarity,
            usability, and creating meaningful digital experiences.
            Explore more and stay connected with ArchInxT.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <button className={styles.primaryBtn}>
              Explore More Designs
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

export default DesignCTA;