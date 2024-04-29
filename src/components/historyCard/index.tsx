import Style from "./historyCard.module.css"
import ProjectType from "../../assets/types/projects";
import { motion } from "framer-motion";
import useNewWindow from "../../customHooks/useNewWindow";

function HistoryCard({ img, tittle, description, reverse, url }: ProjectType & { reverse: number }) {
    const parseKey = reverse % 2 === 0 ? Style.historyCard : Style.historyCardReverse
    return (
        <section className={parseKey}>
            <motion.article onDoubleClick={() => url && useNewWindow(url)} className={Style.containerImg}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    ease: "easeIn",
                    duration: .5
                }}
            >
                <img className={Style.imgCard} alt="img history" src={img} />
            </motion.article >
            <article className={Style.containerText}>
                <h2 className={Style.tittleCard}>{tittle}</h2>
                <p>{description}</p>
            </article>
        </section >
    );
}

export default HistoryCard;