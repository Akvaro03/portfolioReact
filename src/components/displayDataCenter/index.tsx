import { ReactNode } from "react";
import Style from "./displayDataCenter.module.css"
import TextWriterAnimation from "../../animations/TextWriterAnimation";



function DisplayDataCenter({ id, tittle, subtitle, children, background }: { id: string, tittle: string, subtitle: string, children: ReactNode, background?: string }) {
    return (
        <section id={id} style={{ background: background }} className={Style.containerDataCenter}>
            <h2 className={Style.tittleData}>{tittle}</h2>
            <TextWriterAnimation
                className={Style.subtitleData}
                text={subtitle} />
            {children}
        </section>
    );
}

export default DisplayDataCenter;