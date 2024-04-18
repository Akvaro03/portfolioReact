import CardProject from "../cardProject";
import Style from "./projects.module.css"
import CryptoPageImg from "../../assets/img/cryptoPage.png"


function Projects() {
    return (
        <section className={Style.containerProjects}>
            <h3>Projects</h3>
            <article className={Style.containerCards}>
                {projects.map(project => (
                    <CardProject project={project} />
                ))}
            </article>
        </section>
    );
}


const projects = [{ name: "Crypto page", img: CryptoPageImg, description: "A page to consult all the cryptocurrencies based in React" }, { name: "Crypto page", img: CryptoPageImg, description: "A page made for Consultar Srl" }]
export default Projects;