import styles from "./ClosingCTA.module.css";

const ClosingCTA = () => {
  return (
    <section className={styles.closing}>

      <div className="max-w-5xl mx-auto px-6 py-32 text-center">

        <h2 className={styles.title}>
          Explore the World of
          <span> ArchInxT</span>
        </h2>

        <p className={styles.desc}>
          Visual explanations, frontend design explorations,
          and technology insights designed to make modern
          systems easier to understand.
        </p>

        <div className={styles.actions}>

          <button className={styles.primary}>
            Explore Concepts
          </button>

          <button className={styles.secondary}>
            View Designs
          </button>

        </div>

      </div>

    </section>
  );
};

export default ClosingCTA;