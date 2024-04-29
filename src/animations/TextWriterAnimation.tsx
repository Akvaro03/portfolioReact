import { motion } from "framer-motion"

function TextWriterAnimation({ text, className }: { text: string, className?: string }) {
    const textSpited = text.split(" ");
    return (
        <div className={className}>
            {textSpited.map((el, i) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={className}
                    viewport={{ amount: "all" }}
                    transition={{
                        duration: 0.25,
                        delay: i / 10,
                    }}
                    key={i}
                >
                    {el}{" "}
                </motion.span>
            ))}
        </div>
    );
}

export default TextWriterAnimation;