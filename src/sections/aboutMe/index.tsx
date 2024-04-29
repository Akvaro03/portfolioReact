import aboutMeImage from "../../assets/img/aboutMeImage.svg"
import useTickText from "../../customHooks/useTickText";
import mePhoto from "../../assets/img/mePhoto.jpg"
import { Avatar, Button } from "@mui/material";
import Style from "./index.module.css"
import { motion } from "framer-motion";
import { ReactNode } from "react";

function AboutMe() {
    const text = useTickText(["Frontend Developer"])

    return (
        <section className={Style.containerAboutMe} id="Home">
            <article className={Style.tittleAboutMe}>
                <AnimationTranslateX timing={1}>
                    <Avatar src={mePhoto} sx={{ width: "150px", height: "150px" }} alt="Remy Sharp" />
                </AnimationTranslateX>
                <AnimationTranslateX>
                    <h3>Hi!I'm Alvaro Ballarini {text}</h3>
                </AnimationTranslateX>
                <AnimationTranslateX>
                    <span>I am a software developer at Consulr Srl, a company dedicated to creating hybrid applications with .NET and web pages based on React. I love programming and innovation, and I am always looking to learn new technologies and tools to improve my projects and solutions.</span>
                </AnimationTranslateX>
                <AnimationTranslateX timing={1}>
                    <Button className={Style.buttonContactMe} href="mailto:alvaroballarini04@gmail.com" variant="outlined" sx={{ width: "30%", border: "solid 2px", margin: "10px 0" }}>Contact Me</Button>
                </AnimationTranslateX>
            </article>
            <motion.article
                initial={{ scale: 0 }}
                className={Style.imgAboutMe}
                animate={{ scale: 1 }}
                transition={{
                    ease: "easeIn",
                    duration: .5
                }}
            >
                <img src={aboutMeImage} />
            </motion.article>
        </section>
    );
}

const AnimationTranslateX = ({ timing = .8, children }: { timing?: number, children: ReactNode }) => {
    return (
        <motion.div
            initial={{ translateX: -300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{
                ease: "easeIn",
                duration: timing
            }}
        >
            {children}
        </motion.div>
    )
}

export default AboutMe;