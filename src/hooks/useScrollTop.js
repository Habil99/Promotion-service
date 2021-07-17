import { useEffect } from "react"

const useScrollTop = ({ setVisible, scrollAmount, setScrollAmount }) => {
    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            setScrollAmount(val => val = window.pageYOffset);
            if (scrollAmount > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, [scrollAmount, setScrollAmount, setVisible])
}

export { useScrollTop }
