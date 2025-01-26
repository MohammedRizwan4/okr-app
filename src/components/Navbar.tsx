import {NavLink} from "react-router";
import {FaMoon} from "react-icons/fa6";
import React from "react";
import {MdLightMode} from "react-icons/md";
import {signOut, User} from "firebase/auth";
import {auth} from "../firebase/firbaseConfig.ts";

const Navbar = ({user, isDarkMode, setIsDarkMode}: {
    user: User | null,
    isDarkMode: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    return <div
        className="fixed  z-40  bg-white dark:bg-dark dark:border-b dark:border-gray-800 w-full h-16 flex justify-between items-center  dark:text-white ">
        <div className="ml-5 cursor-pointer">
            <img src="../../public/vite.svg" alt=""/>
        </div>
        <div className="flex gap-16 mr-10  font-medium flex-nowrap items-center justify-end text-lg">
            {
                user ? (<>
                    <NavLink to="/create-okr" className="">
                        Create OKR
                    </NavLink>
                    <NavLink to="/view-okrs" className="">
                        Your OKR
                    </NavLink>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-700"
                    >
                        Logout
                    </button>
                </>) : (<NavLink
                    to="/login"
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-700"
                >
                    Login
                </NavLink>)
            }

            {
                isDarkMode ? <FaMoon onClick={toggleDarkMode}
                                     className="text-4xl cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-full"/> :
                    <MdLightMode onClick={toggleDarkMode}
                                 className="text-4xl cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-full"/>
            }
        </div>
    </div>;
};

export default Navbar;
