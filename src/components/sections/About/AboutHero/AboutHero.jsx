import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={`${styles.aboutHero} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">

        <div className="max-w-3xl mx-auto text-center">

          <span className={styles.eyebrow}>
            The Story Behind ArchInxT
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-heading font-bold">
            About
            <span className={styles.gradientText}> ArchInxT </span>
          </h1>

          <p className="mt-8 text-lg text-textMuted leading-relaxed">
            ArchInxT is a personal technology platform focused on
            exploring modern systems through visual explanations,
            frontend design, and structured thinking.
            The goal is simple — make complex technology easier
            to understand through design and clarity.
          </p>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;