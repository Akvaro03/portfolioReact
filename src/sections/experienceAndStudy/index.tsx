import experienceType from "../../assets/types/experience";
import DisplayDataCenter from "../../components/displayDataCenter";
import Style from "./experienceAndStydy.module.css"

function ExperienceAndStudy() {
    return (
        <DisplayDataCenter id="Experience" tittle="Work Experience and Study" subtitle="Here are some of the companies I've worked for and the roles I've held.">
            <article className={Style.contentExperience}>
                {experienceArray.map((data, key) => (
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

const experienceArray: Array<experienceType> = [
    {
        timeLine: "2020 - 2022",
        name: "Acme Inc.",
        description: "Developed and maintained the frontend of a web application using React, Next.js, and Tailwind CSS."
    },
    {
        timeLine: "2018 - 2020",
        name: "Acme Inc.",
        description: "Developed and maintained the frontend of a web application using React, Next.js, and Tailwind CSS."
    },
    {
        timeLine: "2018 - 2020",
        name: "Acme Inc.",
        description: "Developed and maintained the frontend of a web application using React, Next.js, and Tailwind CSS."
    }
]


export default ExperienceAndStudy;