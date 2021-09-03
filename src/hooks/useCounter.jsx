import { useCallback, useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const [isShow, setIsShow] = useState(true);

    const handleClick = useCallback(() => {
        if (count < 10) {
            setCount((prevCount) => prevCount + 1);
        }
    }, [count]);

    const handleDisplay = useCallback(() => {
        setIsShow((prevIsShow) => !prevIsShow);
    }, []);

    const doubleCount = count * 2;

    return { count, isShow, handleClick, handleDisplay, doubleCount };
};
