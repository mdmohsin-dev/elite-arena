import { useState, useEffect, useRef } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);

  const navLinks = <>
    <li><NavLink>Home</NavLink></li>
    <li><NavLink>Courts</NavLink></li>
  </>

  // Frosted glass after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [sidebarOpen]);


  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [sidebarOpen]);


  return (
    <>
      <style>{`

        /* Frosted glass after scroll */
        .navbar.scrolled {
          background: rgba(8, 8, 13, 0.52);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .sidebar {
          z-index: 1100;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sidebar.open { transform: translateX(0); }
      `}</style>

      {/* NAVBAR */}
      <nav className={`navbar${scrolled ? " scrolled" : ""} fixed z-50 w-full`}>
       
        <div className="max-w-350 w-full mx-auto px-6">
           <div className="flex justify-between items-center w-full transition-all duration-500 ease-in-out">

          <a href="#home" className="text-4xl font-normal font-madimi">
            Elite Arena
          </a>

          <div className="lg:flex hidden gap-10 items-center">
            <ul className="flex gap-6 text-black text-[17px] font-semibold font-inter italic">
              {navLinks}
            </ul>
            <button className="btn bg-red-500 border-none flex gap-4 text-lg py-4 px-6 font-exo">Sign In</button>
          </div>

          <button
            className="flex lg:hidden"
            aria-label="Open"
            onClick={() => setSidebarOpen(true)}
          >
            <IoIosMenu size={34} color="black"></IoIosMenu>
          </button>

        </div>
        </div>
      </nav>

      <aside
        ref={sidebarRef}
        className={`sidebar ${sidebarOpen ? " open" : ""} fixed w-72 h-dvh bg-[#EDE8E3]`}
        aria-hidden={!sidebarOpen}
      >
        <div className="sidebar-header">
          <button
            aria-label="Close"
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose size={34} color="black"></IoMdClose>
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-black text-xl font-semibold">
          {navLinks}
        </ul>

        <div>
          <button
            onClick={() => setSidebarOpen(false)}
          >
            Sign In
          </button>
        </div>
      </aside>
    </>
  );
}