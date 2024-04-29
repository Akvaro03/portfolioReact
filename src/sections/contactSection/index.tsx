import DisplayDataCenter from "../../components/displayDataCenter";
import Style from "./contactSection.module.css"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { motion } from "framer-motion";

function ContactSection() {
    const email = "Alvaroballarini04@gmail.com";
    const copyEmail = () => {
        navigator.clipboard.writeText(email);
    }
    return (
        <DisplayDataCenter tittle="Contact" subtitle="Have a project in mind? Let's chat! Fill out the form below and I'll get back to you as soon as possible.">
            <article className={Style.containerContact}>
                <span className={Style.emailField}>
                    <span>{email}</span>
                    <div onClick={copyEmail} className={Style.containerIcon}>
                        <motion.div
                            whileTap={{ scale: 0.8 }}
                        >
                            <ContentCopyIcon />
                        </motion.div>
                    </div>
                </span>
            </article>
        </DisplayDataCenter>
    );
}

export default ContactSection;