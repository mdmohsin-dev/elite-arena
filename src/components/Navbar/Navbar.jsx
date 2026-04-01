import { useState, useEffect, useRef } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logo.png"

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/courts">Courts</NavLink></li>
  </>


const handleNavClick = (e) => {
  if (e.target.closest("a")) {
    setSidebarOpen(false);
  }
};

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
      <nav className={`navbar${scrolled ? " scrolled" : ""} fixed z-50 w-full box-content`}>

        <div className="max-w-350 w-full mx-auto px-6 py-3">
          <div className="flex justify-between items-center w-full transition-all duration-500 ease-in-out">

            <Link><img className="w-14" src={logo} alt="" /></Link>

            <div className="lg:flex hidden gap-10 items-center">
              <ul className="flex gap-6 text-black text-[17px] font-semibold font-inter italic">
                {navLinks}
              </ul>
              <Link className="btn rounded-lg bg-red-500 border-none flex gap-4 text-lg py-4 px-6 font-exo hover:rounded-3xl transition-all duration-500 hover:bg-black">Sign In</Link>
            </div>

            <button
              className="flex lg:hidden"
              aria-label="Open"
              onClick={() => setSidebarOpen(true)}
            >
              <IoIosMenu size={34} color="#FF02CB"></IoIosMenu>
            </button>

          </div>
        </div>
      </nav>

      <aside
        ref={sidebarRef}
        className={`sidebar ${sidebarOpen ? " open" : ""} fixed w-72 h-dvh bg-[#EDE8E3] pl-4 pt-4 pr-2`}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex text-black justify-between items-center">
          <h3 className="text-3xl font-normal font-marker">
            Elite Arena
          </h3>
          <button
            aria-label="Close"
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose size={34} color="black"></IoMdClose>
          </button>
        </div>

        <ul onClick={handleNavClick}
        className="flex flex-col gap-6 text-black text-xl font-semibold pt-6">
          {navLinks}
        </ul>

        <div>
          <button
            onClick={() => setSidebarOpen(false)}
          >
            <Link className="absolute bottom-4 btn bg-red-500 border-none flex gap-4 text-lg py-4 px-6 font-exo hover:rounded-3xl transition-all duration-500 hover:bg-black">Sign In</Link>
          </button>
        </div>
      </aside>
    </>
  );
}