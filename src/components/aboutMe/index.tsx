import { Avatar, Button } from "@mui/material";
import aboutMeImage from "../../assets/img/aboutMeImage.svg"
import Style from "./index.module.css"
import useTickText from "../../customHooks/useTickText";
import mePhoto from "../../assets/img/mePhoto.jpg"

function AboutMe() {
    const text = useTickText(["Frontend Developer"])
    return (
        <section className={Style.containerAboutMe} id="Home">
            <article className={Style.tittleAboutMe}>
                <Avatar src={mePhoto} sx={{ width: "150px", height: "150px" }} alt="Remy Sharp" />
                <h3>Hi!I'm Alvaro Ballarini {text}</h3>
                <span>I am a software developer at Consulr Srl, a company dedicated to creating hybrid applications with .NET and web pages based on React. I love programming and innovation, and I am always looking to learn new technologies and tools to improve my projects and solutions.</span>
                <Button href="mailto:alvaroballarini04@gmail.com" variant="outlined" color="inherit" sx={{ width: "30%", border:"solid 2px", margin:"10px 0" }}>Contact Me</Button>
            </article>
            <article className={Style.imgAboutMe}>
                <img src={aboutMeImage} />
            </article>
        </section>
    );
}
export default AboutMe;