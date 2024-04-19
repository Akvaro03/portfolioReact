import { Chip } from "@mui/material";
import ProjectType from "../../assets/types/projects";
import Style from "./cardProjectStyle.module.css"

function CardProject({ project }: { project: ProjectType }) {
    const { url, img, technology, state, description } = project;
    const handleClick = () => {
        if (url && /^https?:\/\//i.test(url)) {
            window.open(url, "_blank");
        }
    };


    return (
        <div className={Style.cardProject} style={{ cursor: url ? "pointer" : "default" }} onDoubleClick={handleClick}>
            <img className={Style.imgCardProject} src={img} alt="Project" />
            <article className={Style.containerTechnology}>
                {technology.map((data, key) => (
                    <Chip color="default" sx={{ background: "#E9CD0C" }} size="small" label={data} key={key} />
                ))}
            </article>
            <footer>State: {state}</footer>
            <p>{description}</p>
        </div>
    );
}
export default CardProject;