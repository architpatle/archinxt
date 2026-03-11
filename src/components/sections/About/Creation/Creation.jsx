import styles from "./Creation.module.css";
import { Cpu, Layout, Sparkles } from "lucide-react";

const Creation = () => {
  return (
    <section className={`${styles.creation} relative`}>

       

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        {/* Section Header */}

        <div className="max-w-2xl">

          <span className={styles.eyebrow}>
            What I Create
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold">
            What
            <span className={styles.gradientText}> ArchInxT </span>
            Creates
          </h2>

          <p className="mt-6 text-lg text-textMuted leading-relaxed">
            ArchInxT focuses on exploring modern technology through
            visual explanations, frontend design explorations,
            and structured design thinking.
          </p>

        </div>

        {/* Panels */}

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div className={styles.panel}>
            <div className={styles.icon}>
            <Cpu size={26} />
</div>
            <h3 className="mt-6 text-xl font-semibold">
              Tech Concepts
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Visual breakdowns of modern technologies such as
              networking, caching, APIs, and system architecture.
            </p>
          </div>

          <div className={styles.panel}>
             <div className={styles.icon}>
                   <Layout size={26}  />
</div>
 

            <h3 className="mt-6 text-xl font-semibold">
              Frontend Design
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Interface architecture, modern UI layouts,
              and design experiments for digital platforms.
            </p>
          </div>

          <div className={styles.panel}>
             <div className={styles.icon}>
                        <Sparkles size={26}  />

</div>

            <h3 className="mt-6 text-xl font-semibold">
              UI/UX Insights
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Understanding how great digital experiences
              are designed and how interfaces guide users.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Creation;