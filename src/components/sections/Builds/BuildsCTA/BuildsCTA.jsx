import styles from "./BuildsCTA.module.css";
import { Link } from "react-router-dom";

const BuildsCTA = () => {
  return (
    <section className={`${styles.cta} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className={styles.card}>

          {/* Heading */}

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
            Building Products
            <span className={styles.gradientText}> That Work </span>
          </h2>

          {/* Description */}

          <p className="mt-6 text-lg text-textMuted max-w-2xl mx-auto text-center">
            Turning concepts into fully functional digital products —
            focused on performance, scalability, and real-world impact.
            Let’s build something meaningful together.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <Link to="/connect" className={styles.primaryBtn}>
              Start a Project
            </Link>

            <a
              href="https://www.linkedin.com/in/archit-patle"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Connect on LinkedIn
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BuildsCTA;