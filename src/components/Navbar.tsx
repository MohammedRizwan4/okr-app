import {NavLink} from "react-router";
import {FaMoon} from "react-icons/fa6";

const Navbar = () => {
    return <div className="w-full h-16 flex justify-between items-center text-black dark:text-white dark:bg-slate-600">
        <div className="ml-5 cursor-pointer">
            <img src="../../public/vite.svg" alt=""/>
        </div>
        <div className="flex gap-16 mr-10  font-medium flex-nowrap items-center justify-end">
            <NavLink to="/" className="">
                Home
            </NavLink>
            <NavLink to="/create-okr" className="">
                Create OKR
            </NavLink>
            <NavLink to="/view-okrs" className="">
                Your OKR
            </NavLink>
            <FaMoon onClick={() => {
                document.body.classList.toggle("dark")
            }} className="text-2xl cursor-pointer"/>
        </div>
    </div>;
};

export default Navbar;
