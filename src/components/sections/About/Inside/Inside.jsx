import styles from "./Inside.module.css";

import conceptImg from "../../../../assets/images/concept-preview.png";
// import frontendImg from "../../../assets/images/frontend-preview.png";
// import uxImg from "../../../assets/images/ux-preview.png";

const items = [
  {
    title: "Tech Concepts",
    desc: "Breaking down modern technologies through visual explanations and structured system thinking.",
    image: conceptImg,
  },
  {
    title: "Frontend Design",
    desc: "Exploring modern interface structures, layouts, and frontend architecture patterns.",
    image: conceptImg,
  },
  {
    title: "UI/UX Insights",
    desc: "Understanding how thoughtful design decisions shape intuitive digital experiences.",
    image: conceptImg,
  },
];

const Inside = () => {
  return (
    <section className={`${styles.inside} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        {/* Header */}

        <div className="max-w-2xl mx-auto text-center">

          <span className={styles.eyebrow}>
            Exploration Areas
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold">
            What
            <span className={styles.gradientText}> ArchInxT </span>
            Explores
          </h2>

        </div>

        {/* Blocks */}

        <div className="mt-24 space-y-28">

          {items.map((item, index) => (

            <div
              key={index}
              className={`${styles.block} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
            >

              {/* Text */}

              <div className={styles.text}>

                <h3 className={styles.title}>
                  {item.title}
                </h3>

                <p className={styles.desc}>
                  {item.desc}
                </p>

              </div>

              {/* Visual */}

              <div className={styles.visual}>
                <img src={item.image} alt={item.title} />
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Inside;