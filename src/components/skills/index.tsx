import Style from "./skills.module.css"
import Css from "../../assets/img/css.svg"
import Bootstrap from "../../assets/img/bootstrap.svg"
import Javascript from "../../assets/img/javascript.svg"
import Mongo from "../../assets/img/mongo.svg"
import Sql from "../../assets/img/sql.svg"
import React from "../../assets/img/react.svg"
import { motion } from "framer-motion";
import { Chip } from "@mui/material"
import { ReactNode } from "react"
function Skills() {
    return (
        <section className={Style.containerSkills}>
            <AnimationInView className={Style.containerSectionEducationSkills}>
                <h2 className={Style.tittleSection}>Education<span className={Style.specialColor}>:</span></h2>
                <ul className={Style.contentEducation}>
                    <li>
                        <h3 className={Style.tittleEducation}>Tecnico superior</h3>
                        <p>San Jose Rosario</p>
                        <p>Inicio - Fin</p>
                    </li>
                    <li>
                        <h3 className={Style.tittleEducation}>Autodidact</h3>
                        <p>Curses and owr investigate</p>
                    </li>
                </ul>
            </AnimationInView>
            <AnimationInView delay={.8} className={Style.containerSectionEducationSkills}>
                <h2 className={Style.tittleSection}>Skills<span className={Style.specialColor}>:</span></h2>
                <div className={Style.contentSkills}>
                    {icons.map((icon, key) => (
                        <div key={key}>
                            <img className={Style.iconSkills} src={icon.img} alt="Skill Icon" />
                            <p>{icon.name}</p>
                        </div>
                    ))}
                </div>
                <div className={Style.contentSoftSkills}>
                    {softSkills.map((softSkill, key) => (
                        <Chip color="info" size="small" key={key} label={softSkill} />
                    ))}
                </div>
            </AnimationInView>
        </section>
    );
}

const icons = [
    { name: "Css", img: Css },
    { name: "Bootstrap", img: Bootstrap },
    { name: "Javascript", img: Javascript },
    { name: "Mongo", img: Mongo },
    { name: "Sql", img: Sql },
    { name: "React", img: React }
]
const softSkills = ["Flexibility", "Time Management", "Patience", "Communication"]
const AnimationInView = ({ children, delay = .4, className }: { children: ReactNode, delay?: number, className?: string }) => (
    <motion.article
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "all", once: true }}
        transition={{
            delay: delay,
        }}
    >{children}</motion.article>
)
export default Skills;