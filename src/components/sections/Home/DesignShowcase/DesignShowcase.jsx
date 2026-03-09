import styles from "./DesignShowcase.module.css";
import wildcap from "../../../../assets/images/Wildcap.png";
import neurosync from "../../../../assets/images/Neurosync.png";
import sustainify from "../../../../assets/images/Sustainify.png"

const designs = [
  {
    title: "WildCap Safari Platform",
    image: wildcap,
  },
  {
    title: "NeuroSync AI Platform",
    image: neurosync,
  },
  {
    title: "Sustainify Innovation Platform",
    image: sustainify,
  },
  
];

const DesignShowcase = () => {
  return (
    <section className={`${styles.showcase} relative`}>

      {/* Grid Background */}
      <div className={styles.grid}></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">

          <div className="max-w-2xl">

            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Frontend
              <span className={styles.gradientText}> Design Showcase </span>
            </h2>

            <p className="mt-4 text-textMuted text-lg">
              A collection of modern UI explorations, hero sections,
              and interface concepts crafted for digital products.
            </p>

          </div>

          <button className={`${styles.viewAllBtn} mt-6 md:mt-0`}>
            View All Designs
          </button>

        </div>

        {/* Design Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {designs.map((design, index) => (
            <div key={index} className={styles.card}>

              <div className={styles.imageWrapper}>

                <img
                  src={design.image}
                  alt={design.title}
                  className={styles.image}
                />

              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {design.title}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default DesignShowcase;