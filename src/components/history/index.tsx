import { useRef } from "react";
import Style from "./history.module.css"
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";

function History() {
    const containerRef = useRef(null)
    return (
        <section ref={containerRef} className={Style.containerHistory}>
            <motion.article
                className={Style.scrollAndTittle}
                initial={{ position: "static" }}
                whileInView={{ position: "sticky", top: "15px" }}
                viewport={{ root: containerRef }}
            >
                <h2>What i did?</h2>
            </motion.article>
            <Skeleton height={"110vh"} />
        </section>
    );
}

export default History;