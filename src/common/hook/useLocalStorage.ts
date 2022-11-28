import { useEffect, useState } from "react";

/**
 * 修改值自动同步到 window.localStorage
 * @param key 
 * @param defaultValue 
 * @returns 
 */ 
// const useLocalStorage = (key: string, defaultValue: string) => {
//     const [value, setValue] = useState(defaultValue);

//     useEffect(() => {
//         window.localStorage.setItem(key, value);
//     }, [key, value]);

//     return [value, setValue]
// }





const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        window.localStorage.setItem(key, value);
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage;