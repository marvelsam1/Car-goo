import { IoMenuOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return ( 
        <nav className="sticky shadow-lg top-0 bg-white">
        <div className="flex justify-between items-center md:px-24 py-5 px-4 top-0 relative">
            <p className=" font-bold md:text-2xl text-[20px] text-blue">CarGoo</p>

            <ul className="lg:flex lg:flex-row flex-col items-center gap-10 text-sm font-medium hidden">
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li><a href="#">Become a renter</a></li>
                <li><a href="#howitworks1">How it works</a></li>
                <li><a href="#whyChooseUs1">Why choose us</a></li>
            </ul>

            <ul className="lg:flex lg:flex-row flex-col items-center gap-10 text-sm font-medium hidden">
                <li>
                    <NavLink to={'/Sign-In'}> Sign In</NavLink>
                </li>
                <li className="text-white bg-blue py-3 px-7 rounded-lg">
                    <NavLink to={'/Sign-Up'}> Sign Up</NavLink>
                </li>
            </ul>

            <IoMenuOutline
                className="visible lg:invisible cursor-pointer lg:absolute text-[27px]"
                onClick={toggleMenu}
            />

                           

            {menuVisible && (
                <div className="flex flex-col gap-10 lg:flex-row absolute top-0 w-[100%] right-0 py-8 px-6 lg:px-0  shadow-lg z-20 bg-white">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold md:text-2xl text-[20px] text-blue">CarGoo</h1>
                            <FaTimes
                                onClick={toggleMenu}
                                className="lg:invisible visible cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-10 justify-center">
                        <ul className="flex lg:flex-row flex-col items-center gap-10 text-sm font-medium">
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li><a href="#">Become a renter</a></li>
                            <li><a href="#howitworks2">How it works</a></li>
                            <li><a href="#whyChooseUs2">Why choose us</a></li>
                        </ul>

                        <ul className="flex lg:flex-row flex-col items-center gap-10 text-sm font-medium">
                            <li>
                                <NavLink to={'/Sign-In'}> Sign In</NavLink>
                            </li>
                            <li className="text-white bg-blue py-3 px-7 rounded-lg">
                                <NavLink to={'/Sign-Up'}> Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
        </nav>
     );
}
 
export default Navbar;