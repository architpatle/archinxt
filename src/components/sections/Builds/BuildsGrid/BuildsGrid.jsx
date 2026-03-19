import styles from "./BuildsGrid.module.css";
import { useState } from "react";
import buildsData from "../../../../data/buildsData";
import BuildCard from "./BuildCard";

const PAGE_SIZE = 6;

const BuildsGrid = () => {

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleBuilds = buildsData.slice(0, visibleCount);
  const hasMore = visibleCount < buildsData.length;

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
            <span className={styles.gradientText}> Builds </span>
          </h2>

          <p className="mt-4 text-textMuted text-lg">
            A collection of real-world digital products built with
            modern technologies and practical implementation.
          </p>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {visibleBuilds.map((build, index) => (
            <BuildCard key={build.slug} data={build} />
          ))}

        </div>

        {/* Load More Button */}

        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className={styles.loadMoreBtn}
            >
              Explore More Builds
            </button>
          </div>
        )}

      </div>

    </section>
  );
};

export default BuildsGrid;