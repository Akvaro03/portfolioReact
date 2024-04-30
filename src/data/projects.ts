import cryptoPage from "../assets/img/cryptoPage.png";
import consultarPage from "../assets/img/consultarPage.png";
import ProjectType from "../assets/types/projects";


const projectsData: Array<ProjectType> = [
    {
        img: cryptoPage,
        description: "A crypto page for follow the principal cryptocurrencies",
        technology: ["React", "TypeScript", "Vite"],
        tittle: "Crypto.com",
        url: "https://crypto-tracker-alvaro.vercel.app/"
    },
    {
        img: consultarPage,
        description: "A local page to organize orders with user system",
        technology: ["React", "Sqlite", "Node"],
        tittle: "Crypto.com"
    }
]

export default projectsData;