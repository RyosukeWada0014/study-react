import { useCallback, useState } from "react";

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleChange = useCallback((e) => {
        if (e.target.value.length > 5) {
            alert("warning");
            return;
        }
        setText(e.target.value.trim());
    }, []);

    const handleAdd = useCallback(() => {
        setArray((prevArray) => {
            if (prevArray.includes(text)) {
                alert("同じテキストが存在します");
                return prevArray;
            }
            return [...prevArray, text];
        });
    }, [text]);

    return { array, text, handleChange, handleAdd };
};
