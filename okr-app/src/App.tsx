import Navbar from "./components/Navbar.tsx";
import {Navigate, Route, Routes} from "react-router";
import CreateOKRForm from "./components/CreateOKRForm.tsx";
import DisplayOKRs from "./components/DisplayOKRs.tsx";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";
import {ObjectiveType} from "./types/OKRtypes.ts";
import {auth} from "./firebase/firbaseConfig.ts";
import Login from "./components/Login.tsx";
import {Atom} from "react-loading-indicators";
import { User } from "firebase/auth";

const App = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark"
    });

    const [objectives, setObjectives] = useState<ObjectiveType[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            document.body.classList.add("dark")
            setIsDarkMode(true)
        } else if (theme === "light") {
            document.body.classList.remove("dark")
            setIsDarkMode(false)
        }

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // setTimeout(() => {
            setIsLoading(false)
            // }, 3000)
        });

        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <div className="h-screen flex items-center justify-center text-lg">
            <Atom color="rgb(14 165 233 / var(1, 1))" size="medium" text="" textColor="rgb(14 165 233 / var(1, 1))"/>
        </div>;
    }

    return <div className="h-screen flex flex-col text-gray-700">
        <Navbar user={user} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className="flex-grow">
            {
                user && <Navbar user={user} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            }
            <Routes>
                <Route path="/login" element={user ? <Navigate to="/view-okrs"/> : <Login/>}/>
                <Route path="/create-okr" element={user ? <CreateOKRForm/> : <Navigate to="/login"/>}/>
                <Route path="/view-okrs"
                       element={user ? <DisplayOKRs objectives={objectives} setObjectives={setObjectives}/> :
                           <Navigate to="/login"/>}/>
                <Route path="*" element={<Navigate to={user ? "/view-okrs" : "/login"}/>}/>
            </Routes>
        </div>
    </div>
};

export default App;
