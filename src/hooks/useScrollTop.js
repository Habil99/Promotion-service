import { useEffect } from "react"

const useScrollTop = ({ setVisible, scrollAmount, setScrollAmount }) => {
    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            setScrollAmount(val => val = window.pageYOffset);
            if (scrollAmount > 400) {
                setVisible(true);
                console.log(scrollAmount);

            } else {
                setVisible(false);
                console.log(scrollAmount);
            }

        });
    }, [scrollAmount, setScrollAmount, setVisible])
}

export { useScrollTop }
