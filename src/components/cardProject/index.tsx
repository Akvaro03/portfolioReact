import ProjectType from "../../assets/types/projects";
import { Box } from "@mui/material";
import Style from "./cardProjectStyle.module.css"

function CardProject({ project }: { project: ProjectType }) {
    return (
        <Box sx={{ width: "600px", height: "800px" }}>
            <p>{project.name}</p>
            <img className={Style.imgCardProject} src={project.img} />
            <p>{project.description}</p>
        </Box>
    );
}
{/* <Paper elevation={3} /> */ }
export default CardProject;