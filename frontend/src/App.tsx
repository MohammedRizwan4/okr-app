import Navbar from "./components/Navbar.tsx";
import {Navigate, Route, Routes} from "react-router";
import CreateOKRForm from "./components/CreateOKRForm.tsx";
import DisplayOKRs from "./components/DisplayOKRs.tsx";
import {useEffect, useState} from "react";
import {ObjectiveType} from "./types/OKRtypes.ts";

const App = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark"
    });

    const [objectives, setObjectives] = useState<ObjectiveType[]>([]);

    useEffect(() => {

        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            document.body.classList.add("dark")
            setIsDarkMode(true)
        } else if (theme === "light") {
            document.body.classList.remove("dark")
            setIsDarkMode(false)
        }

    }, []);


    return <div className="h-screen flex flex-col text-gray-700">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className="flex-grow">
            <Routes>
                <Route path="/create-okr" element={<CreateOKRForm/>}/>
                <Route path="/view-okrs"
                       element={<DisplayOKRs objectives={objectives} setObjectives={setObjectives}/>}/>
                <Route path="*" element={<Navigate to="/view-okrs"/>}/>
            </Routes>
        </div>
    </div>
};

export default App;
