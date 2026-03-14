import styles from "./ConnectOptions.module.css";
import { Users, Rocket, Globe } from "lucide-react";

const ConnectOptions = () => {
  return (
    <section className={`${styles.connect} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Section Heading */}

        <div className="max-w-4xl mb-16">

          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Ways to
            <span className={styles.gradientText}> Connect </span>
          </h2>

          <p className="mt-4 text-textMuted text-lg">
            ArchInxT welcomes collaborations, conversations and
            opportunities to explore modern technology together.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className={styles.card}>

            <div className={styles.icon}>
              <Users size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Collaboration
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Developers, designers and creators interested in building
              projects, experimenting with ideas and exploring new
              technology together.
            </p>

          </div>


          {/* Card 2 */}

          <div className={styles.card}>

            <div className={styles.icon}>
              <Rocket size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Opportunities
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Startups, brands and organizations looking for
              collaborations, partnerships or innovative
              technology-driven initiatives.
            </p>

          </div>


          {/* Card 3 */}

          <div className={styles.card}>

            <div className={styles.icon}>
              <Globe size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Community
            </h3>

            <p className="mt-3 text-textMuted text-sm leading-relaxed">
              Learners and tech enthusiasts who want to explore
              the architecture of modern technology and grow
              with the ArchInxT ecosystem.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ConnectOptions;