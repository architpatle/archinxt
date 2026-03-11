import styles from "./Philosophy.module.css";

const items = [
  {
    left: "Technology is not just tools.",
    right: "It is systems.",
  },
  {
    left: "Technology is not just interfaces.",
    right: "It is experience.",
  },
  {
    left: "Technology is not just code.",
    right: "It is architecture.",
  },
];

const Philosophy = () => {
  return (
    <section className={`${styles.philosophy} relative`}>

       

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">

        {/* Header */}

        <div className="max-w-2xl mx-auto text-center">

          <span className={styles.eyebrow}>
            Philosophy
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold">
            The
            <span className={styles.gradientText}> ArchInxT </span>
            Philosophy
          </h2>

        </div>

        {/* Statements */}

        <div className="mt-24 space-y-12">

          {items.map((item, index) => (

            <div key={index} className={styles.row}>

              <span className={styles.left}>
                {item.left}
              </span>

              <span className={styles.right}>
                {item.right}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Philosophy;