import styles from "./Explore.module.css";
import { Layout, BrainCircuit, Sparkles } from "lucide-react";

const Explore = () => {
  return (
    <section className={`${styles.explore} relative`}>

        
       

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Section Heading */}
        <div className="max-w-4xl mb-16">

          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            What You’ll
            <span className={styles.gradientText}> Explore </span>
          </h2>

          <p className="mt-4 text-textMuted text-lg">
            ArchInxT simplifies modern technology through design,
            visual explanations and system thinking.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className={styles.card}>

            <div className={styles.icon}>
              <Layout size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Frontend Design
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Explore modern interface design patterns, responsive
              layouts, and frontend architecture through practical
              UI examples.
            </p>

          </div>


          {/* Card 2 */}
          <div className={styles.card}>

            <div className={styles.icon}>
              <BrainCircuit size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Tech Concepts
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Understand complex technology systems through
              simplified visual breakdowns and easy-to-grasp
              explanations.
            </p>

          </div>


          {/* Card 3 */}
          <div className={styles.card}>

            <div className={styles.icon}>
              <Sparkles size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              UI / UX Insights
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Learn interface psychology, design principles,
              and product thinking used by modern digital products.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Explore;