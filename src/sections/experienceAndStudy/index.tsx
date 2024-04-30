import experienceType from "../../assets/types/experience";
import DisplayDataCenter from "../../components/displayDataCenter";
import experienceData from "../../data/experience";
import Style from "./experienceAndStydy.module.css"

function ExperienceAndStudy() {
    return (
        <DisplayDataCenter id="Experience" tittle="Work Experience and Study" subtitle="Here are some of the companies I've worked for and the roles I've held.">
            <article className={Style.contentExperience}>
                {experienceData.map((data, key) => (
                    <CardExperience {...data} key={key} />
                ))}
            </article>
        </DisplayDataCenter>
    );
}

function CardExperience({ description, name, timeLine }: experienceType) {
    return (
        <div className={Style.cardExperience}>
            <span>{name + " " + timeLine}</span>
            <p>{description}</p>
        </div>
    );
}



export default ExperienceAndStudy;