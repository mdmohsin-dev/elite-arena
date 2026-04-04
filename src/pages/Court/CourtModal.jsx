import { useContext } from 'react';
import { CourtsContext } from '../../providers/CourtsProvider';

const CourtModal = () => {

    const { showModal, setShowModal, selectedCourt, courts, selectedSlot } = useContext(CourtsContext)
    console.log(selectedSlot)

    const findSelectedCourt = courts.find(court => court.id === selectedCourt)

    if (!findSelectedCourt) return null;

    const { court_name, price } = findSelectedCourt

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
                            <input type="date" className="border border-pink-300 input w-full text-lg bg-white text-black" />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    alert('Booking confirmed!');
                                }}
                                className="flex-1 py-3 rounded-xl bg-red-500 text-white font-medium"
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