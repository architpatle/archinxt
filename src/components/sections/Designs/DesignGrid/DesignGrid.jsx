import styles from "./DesignGrid.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import designsData from "../../../../data/designsData";

const PAGE_SIZE = 6;

const DesignGrid = () => {

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleDesigns = designsData.slice(0, visibleCount);
  const hasMore = visibleCount < designsData.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + PAGE_SIZE);
  };

  return (
    <section className={`${styles.designs} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Heading */}

        <div className="max-w-4xl mb-16">

          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Explore
            <span className={styles.gradientText}> Designs </span>
          </h2>

          <p className="mt-4 text-textMuted text-lg">
            A collection of modern UI designs focused on clarity,
            usability, and visual experience.
          </p>

        </div>

        {/* Grid */}

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-10 ${hasMore ? styles.peek : ""}`}>

          {visibleDesigns.map((design, index) => (

            <Link
              to={`/designs/${design.slug}`}
              key={index}
              className={styles.card}
            >

              {/* Image */}

              <div className={styles.imageWrapper}>
                <img
                  src={design.image}
                  alt={design.title}
                  className={styles.image}
                />
              </div>

              {/* Content */}

              <div className="mt-5">

                <h3 className="text-lg font-semibold">
                  {design.title}
                </h3>

                <p className="mt-2 text-sm text-textMuted leading-relaxed">
                  {design.description}
                </p>

                <span className={styles.viewMore}>
                  View Design →
                </span>

              </div>

            </Link>

          ))}

        </div>

        {/* Load More Button */}

        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className={styles.loadMoreBtn}
            >
             Discover More Designs
            </button>
          </div>
        )}

      </div>

    </section>
  );
};

export default DesignGrid;