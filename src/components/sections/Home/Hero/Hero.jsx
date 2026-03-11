import styles from "./Hero.module.css";
import { ArrowRight } from "lucide-react";
import heroVisual from "../../../../assets/images/archinxt-hero-visual.png";

const Hero = () => {
  return (
    <section className={`${styles.hero} relative overflow-hidden`}>

        
       

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-28 relative z-10">

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT SECTION */}
          <div className="max-w-3xl">

            <span className={styles.eyebrow}>
              Tech • Design • Concepts
            </span>

            <h1 className="mt-5 text-5xl md:text-6xl font-heading font-bold leading-tight">
              Architecture Of
              <span className={styles.gradientText}> Innovation </span>
              & Technology
            </h1>

            <p className="mt-6 text-lg text-textMuted leading-relaxed">
              ArchInxT explores modern technology through frontend design,
              visual learning, and simplified tech concepts that help
              developers understand how digital systems really work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className={styles.primaryBtn}>
                Explore Concepts
                <ArrowRight size={18} />
              </button>

              <button className={styles.secondaryBtn}>
                View Designs
              </button>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className={styles.visualWrapper}>

            <img
              src={heroVisual}
              alt="ArchInxT Technology Illustration"
              className={styles.heroImage}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;