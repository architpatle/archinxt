import styles from "./BuildTechStack.module.css";

const BuildTechStack = ({ build }) => {

  if (!build) return null;

  return (
    <section className={styles.section}>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className={styles.header}>

          <span className={styles.eyebrow}>
            Technology
          </span>

          <h2 className={styles.heading}>
            Tech Stack Used
          </h2>

        </div>

        {/* STACK CARDS */}

        <div className={styles.grid}>

          {/* FRONTEND */}
          <div className={styles.card}>
            <h3>Frontend</h3>

            <div className={styles.items}>
              {build.tech?.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          {build.backend && (
            <div className={styles.card}>
              <h3>Backend</h3>

              <div className={styles.items}>
                {build.backend.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* TOOLS */}
          {build.tools && (
            <div className={styles.card}>
              <h3>Tools</h3>

              <div className={styles.items}>
                {build.tools.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
};

export default BuildTechStack;