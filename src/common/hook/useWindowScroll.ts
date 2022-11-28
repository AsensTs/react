import { useEffect, useState } from "react";

interface WindowScroll {
    x: number,
    y: number
}

const useWindowScroll = () => {
    const [scroll, setScroll] = useState<WindowScroll>({
        x: window.scrollX,
        y: window.scrollY
    })

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll({
                x: window.scrollX,
                y: window.scrollY
            })
        })

        return () => {
            window.removeEventListener("scroll", () => {
                setScroll({
                    x: window.scrollX,
                    y: window.scrollY
                })
            })
        }
    })
    return scroll;
}

export default useWindowScroll;