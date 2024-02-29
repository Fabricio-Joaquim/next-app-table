import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useLocalStore } from "../../hooks/useLocalStore";

export const DarkModeButton = () => {

    const [darkMode, setDarkMode] = useLocalStore('darkMode', false);

    const handlerDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <button className="fixed top-4 right-4 p-2 bg-white dark:bg-slate-400 rounded-md shadow-md transition duration-500 ease-in-out z-50"
            onClick={handlerDarkMode}
        >
            {
                darkMode ? <BsFillSunFill size={24} color="yellow" /> : <BsMoonStarsFill size={24} color="black" />
            }
        </button>
        )
}