import styles from "./Community.module.css";

const Community = () => {
  return (
    <section className={`${styles.community} relative`}>

      {/* Grid Background */}
      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className={styles.card}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
            Join the
            <span className={styles.gradientText}> ArchInxT </span>
            Community
          </h2>

          <p className="mt-6 text-lg text-textMuted max-w-2xl mx-auto text-center">
            Explore modern technology through visual explanations,
            frontend design insights, and system thinking.
            Stay connected with the latest concepts and ideas.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <button className={styles.primaryBtn}>
              Follow on LinkedIn
            </button>

            <button className={styles.secondaryBtn}>
              Explore Concepts
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Community;