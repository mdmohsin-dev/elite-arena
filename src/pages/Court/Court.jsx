import { useContext, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CourtsContext } from '../../providers/CourtsProvider';
import { Bounce, toast } from 'react-toastify';

const Court = ({ court }) => {
    const { court_name, image, price, id, slots } = court;
    const { setShowModal, setSelectedCourt, setSelectedSlot } = useContext(CourtsContext)

    const [slot, setSlot] = useState("")

    const clickBooking = () => {
        if (slot == '') {
            toast.error('Choose a slot', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return
        }
        else {
            setSelectedSlot(slot)
        }
        setShowModal(true)
        setSelectedCourt(id)
    }

    return (
        <div className="relative group overflow-hidden rounded-2xl lg:p-7 p-5 w-full h-full backdrop-blur bg-linear-to-br from-[#FF02CB] to-black">
            <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-55 transition-all duration-700 group-hover:scale-125"
                alt=""
            />

            <div className="relative z-10 text-center w-full h-full flex flex-col justify-between">

                <img className="w-full h-60 rounded-2xl" src={image} alt="" />

                <div className=' flex flex-col gap-8 pt-9'>
                    <h3 className="lg:text-3xl text-2xl text-red-500 font-exo bg-white py-2 rounded-md font-semibold">
                        {court_name}
                    </h3>

                    <h3 className="text-2xl font-exo text-[#DA01AD] bg-white py-2 rounded-md font-semibold">
                        ${price}
                    </h3>

                    <select onChange={(e) => setSlot(e.target.value)}
                        className='bg-white text-black py-3 rounded-md text-center' name="" id="">
                        <option value="">--Select a slot--</option>
                        {slots?.map(slot => (<option value={slot}>{slot}</option>))}
                    </select>

                    <button onClick={clickBooking}
                        className="btn rounded-md bg-red-500 border-none flex gap-4 text-lg py-6 px-6 font-exo hover:bg-black transition-all duration-500 hover:rounded-3xl">
                        Book now <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Court;