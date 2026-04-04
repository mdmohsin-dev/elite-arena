import { Link } from "react-router";
import logo from "../assets/images/logo.png"
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#F7DD72] lg:pt-20 md:pt-14 pt-10 pb-10 px-6">
            <div className="max-w-350 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between xl:gap-28 lg:gap-20 gap-14 items-start">
                    <div className="lg:w-1/3 md:w-full">
                        <div className="flex items-center gap-2">
                            <Link to="/"><img className="w-16" src={logo} alt="" /></Link>
                            <h3 className="text-4xl font-marker bg-linear-to-b from-black to-[#FF02CB] bg-clip-text text-transparent">Elite Arena</h3>
                        </div>
                        <p className="text-black pt-4">EliteClub is your all-in-one solution for managing club memberships, court/session bookings, payments, and admin operations.With secure authentication, role-based access, and intuitive dashboards.</p>
                    </div>
                    <div className="lg:w-2/3 md:w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
                        <div className="font-inter">
                            <h3 className="text-2xl text-[#FF02CB] font-semibold">Features</h3>
                            <ul className="text-black pt-1">
                                <li className="text-sm pt-2"><Link>About us</Link></li>
                                <li className="text-sm pt-2"><Link>Blogs</Link></li>
                                <li className="text-sm pt-2"><Link>Events</Link></li>
                                <li className="text-sm pt-2"><Link>Membership</Link></li>
                            </ul>
                        </div>
                        <div className="font-inter">
                            <h3 className="text-2xl text-[#FF02CB] font-semibold">Contatcs</h3>
                            <ul className="text-black pt-1">
                                <li className="text-sm pt-2"><span className="text-[16px] font-semibold">Phone</span>: <a href="tel:0123654789">0123654789</a></li>
                                <li className="text-sm pt-2"><span className="text-[16px] font-semibold">Email</span>: <a href="mailto:info@elitearena.com">info@elitearena.com</a></li>
                                <li className="text-sm pt-2"><span className="text-[16px] font-semibold">Address</span>: Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                        <div className="font-inter">
                            <h3 className="text-2xl text-[#FF02CB] font-semibold">Social</h3>
                            <div className="pt-4 flex items-center gap-4">
                                <FaFacebook size={34} color="black"></FaFacebook>
                                <FaXTwitter size={34} color="black"></FaXTwitter>
                                <FaLinkedin size={34} color="black"></FaLinkedin>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="w-full h-px bg-black my-8"></div>
                <p className="text-center text-black font-inter">© Copyright 2022 <span className="text-lg f font-marker bg-linear-to-b from-black to-[#FF02CB] bg-clip-text text-transparent">Elite Arena</span> All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;