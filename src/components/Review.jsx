import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useContext } from "react";
import { CourtsContext } from "../providers/CourtsProvider";

const Review = () => {

    const { reviews } = useContext(CourtsContext)

    return (
        <div className="max-w-350 mx-auto lg:pt-48 md:pt-24 pt-20 px-6 relative h-full">
            <div className="right-0 absolute -mt-16 flex gap-4">
                <button className="prev bg-[#FF02CB] rounded-full p-1 border border-[#FF02CB] text-white">
                    <RiArrowLeftSLine size={34}></RiArrowLeftSLine>
                </button>

                <button className="next bg-[#FF02CB] rounded-full p-1 border border-[#FF02CB] text-white">
                    <RiArrowRightSLine size={34}></RiArrowRightSLine>
                </button>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
                modules={[Navigation]} className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}
            >

                {
                    reviews.map(review => <SwiperSlide className="flex h-full!" key={review.id}>
                        <div className="bg-white border border-[#FF02CB] text-black p-6 rounded-2xl flex flex-col justify-between gap-5 w-full">
                            <div className="flex items-center justify-center gap-3">
                                <img className="w-20 h-20 rounded-full" src={review.image} alt="" />
                                <div>
                                    <h3 className="text-xl font-semibold font-exo">Mohsin</h3>
                                    <p className="texl-lg font-medium">UI/UX Designer</p>
                                </div>
                            </div>
                            <p>{review.review}</p>

                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Review;