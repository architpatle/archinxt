import styles from "./BuildsGrid.module.css";
import { Link } from "react-router-dom";

const BuildCard = ({ data }) => {
  return (
    <div className={styles.card}>

      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src={data.image}
          alt={data.title}
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className="mt-5">

        {/* Title + Status */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            {data.title}
          </h3>
          <span className={styles.status}>
            {data.status}
          </span>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm text-textMuted leading-relaxed">
          {data.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {data.tech.map((t, i) => (
            <span key={i} className={styles.tech}>
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">

          <Link
            to={`/builds/${data.slug}`}
            className={styles.primaryBtn}
          >
            View Details
          </Link>

          {data.live && (
            <a
              href={data.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Live Preview
            </a>
          )}

        </div>

      </div>

    </div>
  );
};

export default BuildCard;