import languages from "../../assets/types/lenguages";
import css from "../../assets/img/css.svg"
import mongo from "../../assets/img/mongo.svg"
import javascript from "../../assets/img/javascript.svg"
import sql from "../../assets/img/sql.svg"
import typeScript from "../../assets/img/typescript.svg"
import Style from "./skillsSection.module.css"
import DisplayDataCenter from "../../components/displayDataCenter";


function SkillsSection() {
    return (
        <DisplayDataCenter id="Skills" background="#030712" tittle="Skills" subtitle="Here are some of the technologies I'm proficient in:">
            <article className={Style.containerCards}>
                {languagesArray.map((data, key) => (
                    <div className={Style.cardLanguages} key={key}>
                        <img src={data.img} alt="languages icon"/>
                        <p className={Style.subtitleLanguage}>{data.name}</p>
                    </div>
                ))}
            </article>
        </DisplayDataCenter>
    );
}

const languagesArray: Array<languages> = [
    {
        img: mongo,
        name: "MongoDb"
    },
    {
        img: css,
        name: "Css"
    },
    {
        img: javascript,
        name: "Javascript"
    },
    {
        img: sql,
        name: "Sql"
    }, {
        img: typeScript,
        name: "TypeScript"
    }
]

export default SkillsSection;