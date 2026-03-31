import bannerBg from "../../assets/images/sports-bg.webp"
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="min-h-screen bg-no-repeat bg-center bg-cover w-full flex justify-center items-center" style={{ backgroundImage: `url(${bannerBg})` }}>

            <div className="bg-white/60 backdrop-blur-sm text-black flex flex-col text-center justify-center items-center lg:p-10 md:p-8 p-7 xl:max-w-7/12 md:max-w-10/12 max-w-11/12 mx-auto rounded-2xl gap-7 md:gap-10">
                <h3 className="text-4xl md:text-7xl font-marker">Elite Arena</h3>
                <p className="md:text-xl text-lg font-semibold font-inter italic">Manage memberships, court bookings, payments, and operations — all in one sleek platform. Built for club owners who demand simplicity, speed, and excellence.</p>
                <button className="btn bg-red-500 border-none flex gap-4 text-lg py-6 px-6 font-exo hover:rounded-3xl transition-all duration-500 hover:bg-black">Get started <FaArrowRight></FaArrowRight> </button>
            </div>

        </div>
    );
};

export default Banner;