import styles from "./ConnectHero.module.css";

const ConnectHero = () => {
  return (
    <section className={`${styles.hero} relative`}>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}

          <span className={styles.eyebrow}>
            Connect With ArchInxT
          </span>

          {/* Main Heading */}

          <h1 className="mt-6 text-5xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">

            Start a
            <span className={styles.gradient}> Conversation </span>
            that Builds Innovation

          </h1>

          {/* Description */}

          <p className="mt-8 text-lg text-textMuted leading-relaxed max-w-2xl mx-auto">

            Whether you have an idea, collaboration opportunity,
            or simply want to connect — ArchInxT is open to
            conversations that explore technology, innovation,
            and the architecture behind modern systems.

          </p>

        </div>

        {/* Divider */}

        <div className={styles.divider}></div>

      </div>

    </section>
  );
};

export default ConnectHero;