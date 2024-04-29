import { motion, useScroll, useSpring } from "framer-motion";
import Style from "./ScrollBarFollow.module.css"

function ScrollBarFollow({ containerRef, Tittle }: { containerRef: React.RefObject<HTMLElement>, Tittle: string }) {
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <motion.article
            className={Style.scrollAndTittle}
            initial={{ position: "static" }}
            whileInView={{ position: "sticky", top: "9vh" }}
            viewport={{ root: containerRef }}
        >
            <h2 className={Style.tittleScrollBar}>{Tittle}</h2>
            <motion.div
                className={Style.scrollBar}
                style={{ scaleX }}
            />
        </motion.article>

    );
}

export default ScrollBarFollow;