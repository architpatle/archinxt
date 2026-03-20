import { useParams } from "react-router-dom";
import buildsData from "../../data/buildsData";
import styles from "./BuildDetail.module.css";
import BuildDetailHero from "../../components/sections/BuildDetail/BuildDetailHero/BuildDetailHero";
import BuildDescription from "../../components/sections/BuildDetail/BuildDescription/BuildDescription";
import BuildTechStack from "../../components/sections/BuildDetail/BuildTechStack/BuildTechStack";
import BuildRecommendations from "../../components/sections/BuildDetail/BuildRecommendations/BuildRecommendations";

const BuildDetail = () => {
  const { slug } = useParams();
  const build = buildsData.find(item => item.slug === slug);

  if (!build) return <div className="text-center py-20">Not Found</div>;

  return (
    <>
      <BuildDetailHero build={build} />
      <BuildDescription build={build} />
      <BuildTechStack  build={build} />
      <BuildRecommendations currentSlug={build.slug} />
    </>
);
};

export default BuildDetail;