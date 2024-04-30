import Style from "./ProjectsSection.module.css"
import { memo } from "react";
import { motion } from "framer-motion";
import useNewWindow from "../../customHooks/useNewWindow";
import DisplayDataCenter from "../../components/displayDataCenter";
import ProjectType from "../../assets/types/projects";
import projectsData from "../../data/projects";

function ProjectsSection() {
    const MemoizedCardProject = memo(CardProject);
    return (
        <DisplayDataCenter id="Projects" tittle="Projects" subtitle="Check out some of my recent work and the technologies I used to bring them to life.">
            <article className={Style.containerCards}>
                {projectsData.map((data, key) => (
                    <MemoizedCardProject {...data} key={key} />
                ))}
            </article>
        </DisplayDataCenter>
    );
}


function CardProject({ img, description, technology, url }: ProjectType) {
    return (
        <motion.div
            style={{ cursor: url && "pointer" }}
            whileHover={{ scale: url && 1.05 }}
            whileTap={{ scale: url && 0.9 }}
            onClick={() => url && useNewWindow(url)}
            className={Style.cardProject}
        >
            <img loading="lazy" alt="img project" src={img} />
            <div className={Style.describeImgCard}>
                <p className={Style.subtitleCard}>{description}</p>
                <span className={Style.technology}>
                    {technology?.map(((technology, key) => (<p key={key}>{technology}</p>)))}
                </span>
            </div>
        </motion.div>
    );
}

export default ProjectsSection;