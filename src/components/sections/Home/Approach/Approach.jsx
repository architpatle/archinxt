import styles from "./Approach.module.css";
import { Eye, Network, Code } from "lucide-react";

const Approach = () => {
  return (
    <section className={`${styles.approach} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">

          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            The
            <span className={styles.gradientText}> ArchInxT </span>
            Approach
          </h2>

          <p className="mt-4 text-textMuted text-lg">
            Breaking down modern technology through visual explanations,
            system thinking, and design exploration.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className={styles.card}>
            <Eye size={28} className={styles.icon}/>
            <h3 className="mt-6 text-xl font-semibold">Visual Learning</h3>
            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Technology becomes easier to understand when concepts are
              visualized through diagrams, posters and system illustrations.
            </p>
          </div>

          <div className={styles.card}>
            <Network size={28} className={styles.icon}/>
            <h3 className="mt-6 text-xl font-semibold">System Thinking</h3>
            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Understanding technology as interconnected systems rather than
              isolated tools helps developers build better mental models.
            </p>
          </div>

          <div className={styles.card}>
            <Code size={28} className={styles.icon}/>
            <h3 className="mt-6 text-xl font-semibold">Practical Exploration</h3>
            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Concepts become powerful when applied through frontend design
              experiments and real interface architectures.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Approach;