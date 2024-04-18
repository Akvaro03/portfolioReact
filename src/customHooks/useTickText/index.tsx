import { useEffect, useState } from "react";

function useTickText(arrayWords: string[]): string {
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('');
    const [timeLoop, setTimeLoop] = useState(100)
    const [indexWords, setIndexWords] = useState(0)


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, timeLoop);

        return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        // update the text in base to is deleting or not 
        let updatedText = isDeleting ? arrayWords[indexWords].substring(0, text.length - 1) : arrayWords[indexWords].substring(0, text.length + 1);

        setText(updatedText);
        setTimeLoop(130)

        if (!isDeleting && updatedText === arrayWords[indexWords]) {
            // start to deleting the letters
            setIsDeleting(true)
            setTimeLoop(600)
        } else if (isDeleting && updatedText === "") {
            // change the word and cancel the deleting
            setIsDeleting(false)
            setIndexWords(prev => prev === arrayWords.length - 1 ? 0 : ++prev)
            setTimeLoop(300)
        }
    }

    return text
}

export default useTickText;