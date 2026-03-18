import { useParams } from "react-router-dom";
import designsData from "../../data/designsData";
import styles from "./DesignDetail.module.css";

const DesignDetail = () => {

  const { designId } = useParams();

  const design = designsData.find(
    (item) => item.slug === designId
  );

  if (!design) {
    return <div className="py-40 text-center">Design not found</div>;
  }

  return (

    <section className={styles.wrapper}>

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* TITLE */}

        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center">
          {design.title}
        </h1>

        <p className="mt-6 text-center text-textMuted max-w-2xl mx-auto">
          {design.description}
        </p>

        {/* HERO IMAGE */}

        <div className={styles.heroImage}>
          <img src={design.image} alt={design.title} />
        </div>

        {/* SECTIONS */}

        {design.sections.map((section, index) => {

          // TEXT SECTION
          if (section.type === "text") {
            return (
              <div key={index} className={styles.textSection}>
                <h2 className="text-2xl font-semibold">
                  {section.heading}
                </h2>

                {section.content.map((para, i) => (
                  <p key={i} className="mt-4 text-textMuted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            );
          }

          // FULL IMAGE
          if (section.type === "image") {
            return (
              <div key={index} className={styles.fullImage}>
                <img src={section.image} alt="" />
              </div>
            );
          }

          // GRID
          if (section.type === "grid") {
            return (
              <div key={index} className={styles.grid}>
                {section.images.map((img, i) => (
                  <img key={i} src={img} alt="" />
                ))}
              </div>
            );
          }

          return null;
        })}

      </div>

    </section>
  );
};

export default DesignDetail;