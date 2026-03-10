import styles from "./Idea.module.css";
import { FileText, Lightbulb, Network } from "lucide-react";

const Idea = () => {
  return (
    <section className={`${styles.idea} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        {/* Section Header */}

        <div className="max-w-2xl">

          <span className={styles.eyebrow}>
            Philosophy
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold">
            The Idea Behind
            <span className={styles.gradientText}> ArchInxT </span>
          </h2>

          <p className="mt-6 text-lg text-textMuted leading-relaxed">
            Technology is evolving faster than ever, yet many ideas remain
            difficult to understand because they are often explained only
            through dense documentation and fragmented resources.
          </p>

        </div>


        {/* Cards */}

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div className={styles.card}>
            <div className={styles.icon}>
            <FileText size={26}/>
            </div>
            <h3 className="mt-6 text-xl font-semibold">Problem</h3>
            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Many technology concepts are hidden inside long documentation
              and scattered tutorials, making them difficult to follow.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>

            <Lightbulb size={26} />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Approach</h3>
            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              ArchInxT combines design thinking with technical
              understanding to make complex concepts more visual
              and structured.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>

                     <Network size={26}/>

            </div>
            <h3 className="mt-6 text-xl font-semibold">Outcome</h3>
            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Clear mental models that help developers understand
              how modern systems and technologies actually work.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Idea;