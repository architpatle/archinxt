import styles from "./Thinking.module.css";

const Thinking = () => {
  return (
    <section className={`${styles.thinking} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        {/* Header */}

        <div className="max-w-2xl">

          <span className={styles.eyebrow}>
            Approach
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold">
            How
            <span className={styles.gradientText}> ArchInxT </span>
            Thinks
          </h2>

          <p className="mt-6 text-lg text-textMuted leading-relaxed">
            ArchInxT approaches technology through a structured
            framework that focuses on clarity, connections,
            and practical exploration.
          </p>

        </div>

        {/* Process Flow */}

        <div className={styles.flow}>

          <div className={styles.step}>
            <h3>Visual Learning</h3>
            <p>
              Explaining complex systems through
              diagrams, posters and visual structures.
            </p>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.step}>
            <h3>System Thinking</h3>
            <p>
              Understanding how components connect
              and interact within modern technology.
            </p>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.step}>
            <h3>Practical Exploration</h3>
            <p>
              Applying concepts through frontend design
              and real interface architecture.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Thinking;