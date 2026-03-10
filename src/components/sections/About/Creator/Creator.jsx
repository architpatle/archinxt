import styles from "./Creator.module.css";
import { Code, Layout, Cpu } from "lucide-react";

const Creator = () => {
  return (
    <section className={`${styles.creator} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        {/* Header */}

        <div className="max-w-2xl">

          <span className={styles.eyebrow}>
            Built By
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold">
            The Creator Behind
            <span className={styles.gradientText}> ArchInxT </span>
          </h2>

          <p className="mt-6 text-lg text-textMuted leading-relaxed">
            ArchInxT is created by Archit Patle, a frontend developer
            focused on simplifying modern technology through visual
            learning and structured design thinking.
          </p>

        </div>


        {/* Cards */}

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div className={styles.card}>
            <Code size={26} className={styles.icon} />

            <h3 className="mt-6 text-xl font-semibold">
              Frontend Developer
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Building modern web interfaces using
              React, JavaScript, and modern UI architecture.
            </p>

          </div>

          <div className={styles.card}>
            <Layout size={26} className={styles.icon} />

            <h3 className="mt-6 text-xl font-semibold">
              Design Explorer
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Exploring interface design patterns
              and modern UI structures for digital products.
            </p>

          </div>

          <div className={styles.card}>
            <Cpu size={26} className={styles.icon} />

            <h3 className="mt-6 text-xl font-semibold">
              System Thinker
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Understanding how modern technology
              systems connect and operate together.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Creator;