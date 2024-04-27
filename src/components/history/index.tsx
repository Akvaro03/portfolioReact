import { useRef } from "react";
import Style from "./history.module.css"
import { motion, useScroll, useSpring } from "framer-motion";
import { Skeleton } from "@mui/material";

function History() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className={Style.containerHistory}>
            <motion.article
                className={Style.scrollAndTittle}
                initial={{ position: "static" }}
                whileInView={{ position: "sticky", top: "9vh" }}
                viewport={{ root: containerRef }}
            >
                <h2 className={Style.tittleScrollBar}>What i did?</h2>
                <motion.div
                    className={Style.scrollBar}
                    style={{ scaleX }}
                />
            </motion.article>
            <Skeleton height={"110vh"} />
            <Skeleton height={"110vh"} />
            <Skeleton height={"110vh"} />
            <Skeleton height={"110vh"} />
            <Skeleton height={"110vh"} />
        </section>
    );
}

export default History;