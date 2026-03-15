import styles from "./ConceptGrid.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import conceptsData from "../../../../data/conceptsData";

const ConceptGrid = () => {

  const [visibleCount, setVisibleCount] = useState(6);

  const visibleConcepts = conceptsData.slice(0, visibleCount);
  const hasMore = visibleCount < conceptsData.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className={`${styles.concepts} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Heading */}

        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Explore
            <span className={styles.gradientText}> Concepts </span>
          </h2>

          <p className="mt-4 text-textMuted text-lg">
            Key ideas that shape modern digital systems and
            software architecture.
          </p>
        </div>

        {/* Grid */}

        <div className={`grid md:grid-cols-3 gap-8 ${hasMore ? styles.peek : ""}`}>

          {visibleConcepts.map((concept, index) => {

            const Icon = concept.icon;

            return (
              <div key={index} className={styles.card}>

                <div className={styles.icon}>
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {concept.title}
                </h3>

                <p className="mt-3 text-textMuted text-sm leading-relaxed">
                  {concept.description}
                </p>

                <Link to={concept.path} className={styles.cardBtn}>
                  Explore Concept →
                </Link>

              </div>
            );
          })}

        </div>

        {/* Button */}

        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className={styles.loadMoreBtn}
            >
              Discover More Concepts
            </button>
          </div>
        )}

      </div>

    </section>
  );
};

export default ConceptGrid;