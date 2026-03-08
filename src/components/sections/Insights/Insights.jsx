import styles from "./Insights.module.css";

const insights = [
  {
    category: "Tech Concept",
    title: "Understanding Network Bandwidth",
    description:
      "A simplified breakdown of how bandwidth impacts data transfer and performance in modern applications.",
  },
  {
    category: "System Design",
    title: "Why Pipelines Improve Data Processing",
    description:
      "Explore how pipelines break complex tasks into stages for faster and more efficient processing.",
  },
  {
    category: "Performance",
    title: "How Caching Makes Applications Faster",
    description:
      "Learn how caching reduces repeated computations and speeds up web applications.",
  },
];

const Insights = () => {
  return (
    <section className={`${styles.insights} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">

          <div className="max-w-2xl">

            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Latest
              <span className={styles.gradientText}> Insights </span>
            </h2>

            <p className="mt-4 text-textMuted text-lg">
              Fresh ideas, concepts and explorations from ArchInxT.
            </p>

          </div>

          <button className={`${styles.viewAllBtn} mt-6 md:mt-0`}>
            View All Posts
          </button>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {insights.map((item, index) => (
            <div key={index} className={styles.card}>

              <span className={styles.category}>
                {item.category}
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-textMuted text-sm leading-relaxed">
                {item.description}
              </p>

              <button className={styles.readBtn}>
                Read Insight →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Insights;