import { NavLink } from "react-router-dom";

const NavBar = () => {
    const links = (
        <div className="flex gap-4">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "border-b-2 border-blue-500" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "border-b-2 border-blue-500" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </li>


            <li>
                <NavLink
                    to="/listbook"
                    className={({ isActive }) =>
                        isActive ? "border-b-2 border-blue-500" : ""
                    }
                >
                    ListedBook
                </NavLink>
            </li>
        </div>
    );
    return (
        <div className="sticky top-0 z-10">
            <div className="navbar bg-base-100  w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl font-semibold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="bg-[#23BE0A] mr-3 py-2 px-7 rounded-lg font-semibold text-white cursor-pointer">
                    Sign In
                </a>
                <a className="bg-[#59C6D2] py-2 px-8 rounded-lg text-white font-semibold cursor-pointer">
                    Sign Up
                </a>
            </div>
        </div>
            
        </div>
    );
};

export default NavBar;