import { useContext, useState } from 'react';
import { CourtsContext } from '../../providers/CourtsProvider';
import { Bounce, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { saveCourt } from '../../utility/addToDb';
import { useNavigate } from 'react-router';

const CourtModal = () => {

    const { showModal, setShowModal, selectedCourt, courts, selectedSlot, setSelectDate } = useContext(CourtsContext)
    console.log(selectedSlot)

    const findSelectedCourt = courts.find(court => court.id === selectedCourt)

    if (!findSelectedCourt) return null;

    const { court_name, price } = findSelectedCourt

    const [date, setDate] = useState("")
    const navigate = useNavigate()

    const bookingData = {
        id: findSelectedCourt.id,
        slot: selectedSlot,
        date: date,
        bookedAt: new Date().toISOString(),
        status: 'pending'
    }


    const handleConfirmBooking = async () => {
        if (!date) {
            toast.error('Choose a date', {
                position: "top-center",
                autoClose: 3000,
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

        saveCourt(bookingData)


      await  Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2000
        });
        setShowModal(false)
        setSelectDate(date)
        setDate("")
        navigate("/dashboard/bookings")
    }

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white rounded-2xl p-8 w-full max-w-lg  shadow-xl flex flex-col gap-6">
                        <h2 className="lg:text-3xl text-2xl text-center text-red-500 font-exo font-semibold">
                            {court_name}
                        </h2>

                        <div className='text-black flex flex-col gap-2'>
                            <label htmlFor="" className='text-lg font-semibold'>Slot</label>
                            <input
                                type="text"
                                value={selectedSlot}
                                readOnly
                                className="border border-pink-300 input w-full text-lg bg-white text-black focus:outline-none cursor-not-allowed px-4 py-6 rounded-md"
                            />
                        </div>
                        <div className='text-black flex flex-col gap-2'>
                            <label htmlFor="" className='text-lg font-semibold'>Price</label>
                            <input
                                type="text"
                                value={`$ ${price}`}
                                readOnly
                                className="border border-pink-300 input w-full text-lg bg-white text-black focus:outline-none cursor-not-allowed px-4 py-6 rounded-md"
                            />
                        </div>
                        <div className='text-black flex flex-col gap-2'>
                            <label htmlFor="" className='text-lg font-semibold'>Date</label>
                            <input onChange={(e) => { setDate(e.target.value) }}
                                type="date" className="border border-pink-300 input w-full text-lg bg-white text-black" />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="cursor-pointer flex-1 py-3 rounded-xl border border-gray-300 text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmBooking}
                                className="flex-1 cursor-pointer py-3 rounded-xl bg-red-500 text-white font-medium"
                            >
                                Confirm booking
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CourtModal;