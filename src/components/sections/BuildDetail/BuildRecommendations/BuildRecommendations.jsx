import styles from "./BuildRecommendations.module.css";
import buildsData from "../../../../data/buildsData";
import BuildCard from "../../Builds/BuildsGrid/BuildCard"

const BuildRecommendations = ({ currentSlug }) => {

  // exclude current project
  const filtered = buildsData.filter(
    (item) => item.slug !== currentSlug
  );

  // pick first 3
  const recommendations = filtered.slice(0, 3);

  return (
    <section className={styles.section}>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className={styles.header}>

          <span className={styles.eyebrow}>
            More Builds
          </span>

          <h2 className={styles.heading}>
            Explore other work
          </h2>

        </div>

        {/* GRID */}

        <div className={styles.grid}>

          {recommendations.map((build) => (
            <BuildCard key={build.slug} data={build} />
          ))}

        </div>

      </div>

    </section>
  );
};

export default BuildRecommendations;