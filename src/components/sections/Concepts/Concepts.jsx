import styles from "./Concepts.module.css";
import bandwidth from "../../../assets/images/Bandwidth.png";
import cache from "../../../assets/images/Cache.png";
import pipeline from "../../../assets/images/Pipeline.png";
const concepts = [
  {
    title: "What is Bandwidth?",
    description:
      "Bandwidth defines how much data can travel through a network per second. Higher bandwidth means faster data transfer and smoother digital experiences.",
    image: bandwidth,
  },
  {
    title: "What is a Pipeline?",
    description:
      "A pipeline processes data in multiple stages where each step performs a specific task, enabling faster and more efficient data processing.",
    image: pipeline,
  },{
    title: "What is Cache?",
    description:
      "Caching stores frequently accessed data temporarily so applications can retrieve it faster without repeatedly querying the original source.",
    image: cache,
  },
];

const Concepts = () => {
  return (
    <section className={`${styles.concepts} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">

          <div className="max-w-2xl">

            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Featured
              <span className={styles.gradientText}> Tech Concepts </span>
            </h2>

            <p className="mt-4 text-textMuted text-lg">
              Visual explanations of important technology concepts
              simplified for developers and learners.
            </p>

          </div>

          <button className={styles.viewAllBtn}>
            View All Concepts
          </button>

        </div>

        {/* Concept Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {concepts.map((concept, index) => (
            <div key={index} className={styles.card}>

              <div className={styles.imageWrapper}>
                <img
                  src={concept.image}
                  alt={concept.title}
                  className={styles.image}
                />
              </div>

              <div className="mt-6">

                <h3 className="text-xl font-semibold">
                  {concept.title}
                </h3>

                <p className="mt-3 text-textMuted text-sm leading-relaxed">
                  {concept.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Concepts;