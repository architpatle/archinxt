import styles from "./Roadmap.module.css";
import { Cpu, Layout, Sparkles } from "lucide-react";
import { useState } from "react";

const items = [
  {
    title: "Visual Tech Explanations",
    icon: Cpu,
    desc: "Structured visual breakdowns that simplify complex technology systems and architecture concepts.",
    cta: "Explore Concepts",
  },
  {
    title: "Frontend Architecture",
    icon: Layout,
    desc: "Exploring scalable UI structures, layout systems, and modern component-driven design patterns.",
    cta: "View Designs",
  },
  {
    title: "Experience Thinking",
    icon: Sparkles,
    desc: "Understanding how thoughtful design decisions shape usability, interaction flows, and product experience.",
    cta: "Learn UX Insights",
  },
];

const Roadmap = () => {
  const [active, setActive] = useState(0);

  const ActiveIcon = items[active].icon;

  return (
    <section className={`${styles.roadmap}`}>

      <div className="max-w-7xl mx-auto px-6 py-32">

        {/* Header */}

        <div className="max-w-2xl">

          <span className={styles.eyebrow}>
            Future Direction
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold">
            The Next Phase of
            <span className={styles.gradientText}> ArchInxT </span>
          </h2>

        </div>

        <div className={styles.wrapper}>

          {/* LEFT CARDS */}

          <div className={styles.leftCards}>

            {items.map((item, index) => (

              <div
                key={index}
                onClick={() => setActive(index)}
                className={`${styles.smallCard} ${
                  active === index ? styles.active : ""
                }`}
              >
                {item.title}
              </div>

            ))}

          </div>

          {/* RIGHT PANEL */}

          <div className={styles.rightCard}>

            <div className={styles.icon}>
              <ActiveIcon size={32} />
            </div>

            <h3>{items[active].title}</h3>

            <p>{items[active].desc}</p>

            <button className={styles.cta}>
              {items[active].cta}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Roadmap;