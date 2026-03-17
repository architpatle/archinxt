import { Link } from "react-router-dom";
import conceptsData from "../../../../data/conceptsData";
import styles from "./RelatedConcepts.module.css";

const RelatedConcepts = ({ currentSlug }) => {

  const related = conceptsData
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className={styles.wrapper}>

      <h3 className="text-2xl font-semibold mb-8">
        Related Concepts
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {related.map((concept, index) => {

          const Icon = concept.icon;

          return (
            <div key={index} className={styles.card}>
<div className={styles.cardContent}>
              <div className={styles.icon}>
                <Icon size={24} />
              </div>

              <h4 className="mt-6 text-lg font-semibold">
                {concept.title}
              </h4>

              <p className="mt-3 text-sm text-textMuted leading-relaxed">
                {concept.description}
              </p>
</div>
              {/* CTA */}

              <Link
                to={`/concepts/${concept.slug}`}
                className={styles.readMore}
              >
                Read More →
              </Link>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default RelatedConcepts;