import { useParams } from "react-router-dom";
import buildsData from "../../data/buildsData";
import styles from "./BuildDetail.module.css";
import BuildDetailHero from "../../components/sections/BuildDetail/BuildDetailHero/BuildDetailHero";
import BuildDescription from "../../components/sections/BuildDetail/BuildDescription/BuildDescription";
import BuildTechStack from "../../components/sections/BuildDetail/BuildTechStack/BuildTechStack";

const BuildDetail = () => {
  const { slug } = useParams();
  const build = buildsData.find(item => item.slug === slug);

  if (!build) return <div className="text-center py-20">Not Found</div>;

  return (
    <>
      <BuildDetailHero build={build} />
      <BuildDescription build={build} />
      <BuildTechStack  build={build} />
    </>
);
};

export default BuildDetail;