import {NavLink} from "react-router";
import {FaMoon} from "react-icons/fa6";
import React from "react";
import {MdLightMode} from "react-icons/md";

const Navbar = ({ isDarkMode, setIsDarkMode}: {
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

    return <div
        className="fixed  z-40  bg-white dark:bg-dark dark:border-b dark:border-gray-800 w-full h-16 flex justify-between items-center  dark:text-white ">
        <div className="ml-5 cursor-pointer">
            <img src="../../public/vite.svg" alt=""/>
        </div>
        <div className="flex gap-16 mr-10  font-medium flex-nowrap items-center justify-end text-lg">

            <NavLink to="/create-okr" className="">
                Create OKR
            </NavLink>
            <NavLink to="/view-okrs" className="">
                Your OKR
            </NavLink>
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
