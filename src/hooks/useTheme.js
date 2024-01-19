import { useState, useEffect } from "react"

function useTheme() {
    const [theme, setTheme] = useState(
        localStorage.getItem("dark-mode") || "light"
    );
    const root = document.documentElement;

    useEffect(() => {
        theme === "dark"
            ? root.classList.add("dark")
            : root.classList.remove("dark");
    }, []);

    const changeTheme = () => {
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("dark-mode", "light");
            root.classList.remove("dark");
        } else {
            setTheme("dark");
            localStorage.setItem("dark-mode", "dark");
            root.classList.add("dark");
        }
    };

    return [theme, changeTheme]
}

export default useTheme