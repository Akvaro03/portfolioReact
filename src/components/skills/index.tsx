import Style from "./skills.module.css"
import Css from "../../assets/img/css.svg"
import Bootstrap from "../../assets/img/bootstrap.svg"
import Javascript from "../../assets/img/javascript.svg"
import Mongo from "../../assets/img/mongo.svg"
import Sql from "../../assets/img/sql.svg"
import React from "../../assets/img/react.svg"
function Skills() {
    return (
        <article className={Style.containerSkills}>
            <section className={Style.SkillsComponent}>
                <h3 className={Style.tittleSkills}>Main Skills</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias id maiores necessitatibus aliquam quia ipsa, eius harum sapiente magnam ut tempore repudiandae, odit vero nam sit error? Quos, reiciendis veniam.</span>
                <section className={Style.contentSkills}>
                    {icons.map((icon, key) => (
                        <img key={key} className={Style.iconSkills} src={icon} />
                    ))}
                </section>
                <section>
                    {softSkills.join(" - ")}
                </section>
            </section>
        </article>
    );
}

const icons = [Css, Bootstrap, Javascript, Mongo, Sql, React]
const softSkills = ["Flexibility", "Time Management", "Patience", "Communication"]
export default Skills;