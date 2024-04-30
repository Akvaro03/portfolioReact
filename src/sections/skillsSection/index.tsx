import Style from "./skillsSection.module.css"
import DisplayDataCenter from "../../components/displayDataCenter";
import languagesData from "../../data/skills"


function SkillsSection() {
    return (
        <DisplayDataCenter id="Skills" background="#030712" tittle="Skills" subtitle="Here are some of the technologies I'm proficient in:">
            <article className={Style.containerCards}>
                {languagesData.map((data, key) => (
                    <div className={Style.cardLanguages} key={key}>
                        <img src={data.img} alt="languages icon" />
                        <p className={Style.subtitleLanguage}>{data.name}</p>
                    </div>
                ))}
            </article>
        </DisplayDataCenter>
    );
}

export default SkillsSection;