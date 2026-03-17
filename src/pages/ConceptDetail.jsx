import { useParams } from "react-router-dom";
import conceptsData from "../data/conceptsData";
import ConceptLayout from "../components/sections/ConceptPage/ConceptLayout/ConceptLayout";
import KeyTakeaways from "../components/sections/ConceptPage/KeyTakeaways/KeyTakeaways";
import RelatedConcepts from "../components/sections/ConceptPage/RelatedConcepts/RelatedConcepts";

const ConceptDetail = () => {

  const { conceptId } = useParams();

  const concept = conceptsData.find(
    (item) => item.slug === conceptId
  );

  if (!concept) {
    return <div className="py-40 text-center">Concept not found</div>;
  }

  return (
    <>

      <ConceptLayout
        title={concept.title}
        image={concept.image}
      >

        {/* Sections */}

        {concept.sections.map((section, index) => (

          <div key={index} className="mb-10">

            <h2 className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>

            {section.list ? (
              <ul className="list-disc pl-6 space-y-2 text-textMuted">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              section.content.map((para, i) => (
                <p key={i} className="mb-4 text-textMuted leading-relaxed">
                  {para}
                </p>
              ))
            )}

          </div>

        ))}

        {/* Key Takeaways */}

        {concept.keyTakeaways && (
          <KeyTakeaways points={concept.keyTakeaways} />
        )}

      </ConceptLayout>

      {/* ✅ FULL WIDTH RELATED SECTION */}

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <RelatedConcepts currentSlug={concept.slug} />
      </div>

    </>
  );
};

export default ConceptDetail;