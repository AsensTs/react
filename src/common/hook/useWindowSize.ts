import { useEffect, useState } from "react"

interface WindowSize {
    width: number,
    height: number
}

const useWindowSize = () => {
    const [size, setSize] = useState<WindowSize>({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            })
        })

        return () => {
            window.removeEventListener("resize", () => {
                setSize({
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                })
            })
        }
    })

    return size;
}

export default useWindowSize;