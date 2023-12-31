import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }





    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/" className="text-base  font-medium">Home</NavLink></li>
        <li><NavLink to="/login" className="text-base font-medium">Login</NavLink></li>
        {/* <li><NavLink to="/register" className="text-base font-medium">Register</NavLink></li> */}
        {
            user && <> 
            <li><NavLink to="/addAJob" className="text-base font-medium">Add Job</NavLink></li>
        <li><NavLink to="/myJobs" className="text-base font-medium">My Jobs</NavLink></li>
        <li><NavLink to="/appliedJobs" className="text-base font-medium">Applied Jobs</NavLink></li>
            </>
        }
        <li><NavLink to="/allJobs" className="text-base font-medium">All Jobs</NavLink></li>
        <li><NavLink to="/blogs" className="text-base font-medium">Blogs</NavLink></li>
    
        </>


        return (
        <div className="navbar bg-base-100 pt-1  px-4 md:px-10 border-b-2 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2 pl-4">
                    {
                        theme == "light" && <img className="w-[150px] md:w-[250px]  " src={logo2} alt="" />
                    }
                    {
                        theme == "dark" && <img className="w-[150px] md:w-[250px]  " src={logo1} alt="" />
                    }

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-normal menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end flex y">
                <div className=" ">
                    {
                        user && <img className="rounded-full w-5 md:w-9 mr-1    " src={user?.photoURL} alt="" />
                    }
                    {/* {
                        user && <span className="mr-3 text-xs md:text-sm font-medium">{user?.displayName}</span>
                    } */}
                </div>
                <div className="flex justify-around items-center">
                    <label className="swap swap-rotate pr-2 ">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn btn-outline btn-xs md:btn-md btn-success text-sm md:text-base font-medium">sign out </button>
                            :
                            <Link to="/login"  > <button className="btn btn-outline btn-success btn-xs md:btn-md text-sm md:text-lg font-medium">Login </button> </Link>
                    }
                </div>
            </div>
        </div>
        );
};

        export default Navbar;