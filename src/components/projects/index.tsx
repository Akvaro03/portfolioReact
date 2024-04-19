import ProjectType from "../../assets/types/projects";
import { Variants, motion } from "framer-motion";
import Style from "./projects.module.css";
import CardProject from "../cardProject";

import CryptoPageImg from "../../assets/img/cryptoPage.png"
import ConsultarImg from "../../assets/img/consultarPage.png"

function Projects() {
    return (
        <section className={Style.containerProjects}>
            <h3>Projects</h3>
            <article className={Style.containerCards}>
                {projects.map((project, key) => (
                    <motion.div
                        key={key}
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div className="card" variants={cardVariants}>
                            <CardProject project={project} />
                        </motion.div>
                    </motion.div>
                ))}
            </article>
        </section>
    );
}

const cardVariants: Variants = {
    offscreen: {
        x: 900,
        rotate: -20,
    },
    onscreen: {
        x: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.4,
        }
    }
};

const projects: ProjectType[] = [
    {
        name: "Crypto page",
        img: CryptoPageImg,
        description: "A page to consult all the cryptocurrencies based in React",
        technology: ["Javascript", "React", "Vite", "SWR", "Typescript"],
        state: "In process",
        url: "https://crypto-tracker-omega-two.vercel.app/"
    },
    {
        name: "Crypto page",
        img: ConsultarImg,
        description: "A page made for Consultar Srl",
        technology: ["Javascript", "React", "Vite", "SWR", "Typescript"],
        state: "In process"
    }
]
export default Projects;