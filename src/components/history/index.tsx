import { useRef } from "react";
import Style from "./history.module.css"
import { Skeleton } from "@mui/material";
import ProjectType from "../../assets/types/projects";
import cryptoPage from "../../assets/img/cryptoPage.png";
import HistoryCard from "../historyCard";
import ScrollBarFollow from "../scrollBarFollow";


function History() {
    const containerRef = useRef(null)
    return (
        <section ref={containerRef} className={Style.containerHistory}>
            <ScrollBarFollow containerRef={containerRef} Tittle="About me"/>
            <Skeleton sx={{ width: "100%" }} height={"70vh"} />
            {historyData.map((data, key) => (
                <HistoryItem key={key} reverse={key % 2} {...data} />
            ))}
        </section>
    );
}

function HistoryItem({ reverse, ...data }: ProjectType & { reverse: number }) {
    return (
        <>
            <HistoryCard reverse={reverse} {...data} />
            <Skeleton sx={{ width: "100%" }} height={"40vh"} />
        </>
    );
}

const historyData: Array<ProjectType> = [
    {
        img: cryptoPage,
        description: "A crypto page for follow the principal cryptocurrencies",
        technology: ["React", "TypeScript"],
        tittle: "Crypto.com",
        url: "https://www.google.com"
    },
    {
        img: cryptoPage,
        description: "A crypto page for follow the principal cryptocurrencies",
        technology: ["React", "Sql", "Node"],
        tittle: "Crypto.com",
        url: "https://www.google.com"
    }, {
        img: cryptoPage,
        description: "A crypto page for follow the principal cryptocurrencies",
        tittle: "Crypto.com",
        url: "https://www.google.com"
    }, {
        img: cryptoPage,
        description: "A crypto page for follow the principal cryptocurrencies",
        tittle: "Crypto.com",
        url: "https://www.google.com"
    }, {
        img: cryptoPage,
        description: "A crypto page for follow the principal cryptocurrencies",
        tittle: "Crypto.com",
        url: "https://www.google.com"
    },
]
export default History;