import styles from "./BuildDescription.module.css";

const BuildDescription = ({ build }) => {

  if (!build) return null;

  return (
    <section className={styles.section}>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* 🔷 LEFT CONTENT */}

        <div>

          <span className={styles.eyebrow}>
            Overview
          </span>

          <h2 className={styles.heading}>
            Built with purpose and precision
          </h2>

          <p className={styles.description}>
            {build.overview}
          </p>

        </div>

        {/* ⚡ RIGHT FEATURES */}

        <div className={styles.features}>

          {build.features?.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <span className={styles.featureIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{feature}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default BuildDescription;