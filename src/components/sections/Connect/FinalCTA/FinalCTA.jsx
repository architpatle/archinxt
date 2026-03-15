import styles from "./FinalCTA.module.css";

const FinalCTA = () => {
  return (
    <section className={`${styles.cta} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className={styles.card}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
            Start the
            <span className={styles.gradientText}> Conversation </span>
          </h2>

          <p className="mt-6 text-lg text-textMuted max-w-2xl mx-auto text-center">
            Have an idea, opportunity, or collaboration in mind?
            Let’s connect and explore how technology, design,
            and innovation can create something meaningful.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <button className={styles.primaryBtn}>
              Send a Message
            </button>

            <button className={styles.secondaryBtn}>
               Explore ArchInxT
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FinalCTA;