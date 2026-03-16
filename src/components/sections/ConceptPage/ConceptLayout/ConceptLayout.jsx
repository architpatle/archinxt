import styles from "./ConceptLayout.module.css";

const ConceptLayout = ({ title, image, children }) => {
  return (
    <section className={`${styles.wrapper} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}

        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-16">
  Understanding
  <span className={styles.gradientText}> {title} </span>
</h1>

        <div className={styles.layout}>

          {/* Image Card */}

          <div className={styles.left}>

            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
              </div>
            </div>

          </div>

          {/* Scrollable Content */}

          <div className={styles.right}>
            {children}
          </div>

        </div>

      </div>

    </section>
  );
};

export default ConceptLayout;