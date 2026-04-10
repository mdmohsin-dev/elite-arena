import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
    FaArrowRight,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import Logo from "../assets/images/logo.png";


const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const links = [
        { name: "My Profile", path: "/dashboard/profile" },
        { name: "My Bookings", path: "/dashboard/bookings" },
        // { name: "Announcement", path: "/dashboard/announcement" },
    ];

    // Close sidebar on mobile after clicking a link
    const handleMobileNavClick = () => {
        if (window.innerWidth < 768) setSidebarOpen(false);
    };

    // Close sidebar if clicking outside (mobile)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarOpen &&
                window.innerWidth < 768 &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [sidebarOpen]);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#EFEAE6] dashboard-layout">
            {/* Mobile Top-bar */}
            <header className="flex items-center justify-between md:hidden p-4 fixed top-0 left-0 w-full z-40 bg-transparent backdrop-blur-md shadow">
                <Link to="/dashboard" className="flex items-center gap-2">
                    <img className="w-14" src={Logo} alt="Logo" />
                    <h1 className="text-3xl bg-linear-to-b from-black to-[#FF02CB] bg-clip-text text-transparent">
                        EliteClub
                    </h1>
                </Link>
                <button
                    onClick={() => setSidebarOpen((prev) => !prev)}
                    className="text-gray-700 text-2xl z-50"
                    aria-label="Toggle sidebar"
                >
                    {sidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={`bg-white space-y-6 fixed z-30 w-72 lg:w-80
          transition-all duration-300 ease-in-out
          h-[calc(100vh-72px)] top-18
          md:h-screen md:top-0
          ${sidebarOpen
                        ? "left-0 translate-x-0 bg-white/60 backdrop-blur-md"
                        : "-translate-x-full"
                    }
          md:translate-x-0 md:left-0`}
            >
                {/* Desktop Logo */}
                <Link
                    to="/dashboard"
                    className="hidden md:flex items-center gap-3 mb-8 hover:opacity-80"
                >
                    <img src={Logo} alt="Website Logo" className="h-12 w-12 object-contain" />
                    <h1 className="text-3xl bg-linear-to-b from-black to-[#FF02CB] bg-clip-text text-transparent font-marker">
                        Elite Arena
                    </h1>
                </Link>

                {/* Sidebar Navigation */}

                <ul className="flex flex-col w-full gap-2 my-20 text-left text-black">
                    {links.map(link => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `block w-full px-5 py-2 font-semibold text-lg transition ${isActive ? "bg-[#FF02CB] text-white" : "hover:bg-gray-200"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <Link to="/"
                    onClick={handleMobileNavClick}
                    className="btn rounded-lg bg-red-500 border-none flex gap-4 text-lg py-6 px-6 font-exo hover:rounded-3xl transition-all duration-500 hover:bg-black absolute bottom-5 left-4">Return Home<FaArrowRight></FaArrowRight>
                </Link>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 mt-18 md:mt-5 md:ml-70 lg:ml-80">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;