import { MdSportsTennis } from "react-icons/md";

const Booking = ({booking}) => {

console.log(booking.slot)
     return (

      <div className="max-w-5xl mx-auto p-6">
         <div
                key={booking._id}
                className="border border-gray-300 rounded-xl p-6 shadow-md bg-white hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <MdSportsTennis className="text-pink-500" />
                    {booking.court_name}
                  </h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    {booking.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-1">
                  📅 <span className="font-medium">{booking.date}</span>
                </p>
                <p className="text-gray-600 mb-1">
                  ⏰ Slots: <span className="font-medium">{booking.slot}</span>
                </p>
                <p className="text-gray-700 font-bold mt-2">💰 Total Price: ${booking.price}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Booked at: {new Date(booking.bookedAt).toLocaleString()}
                </p>

                {/* <button
                  onClick={() => openModal(booking._id)}
                  className="mt-4 px-4 py-2 bg-red-600 hover:bg-black hover:scale-110 transition-all duration-300 cursor-pointer text-white rounded-lg">
                    Cancel booking
                </button> */}
              </div>
      </div>
  );
};

export default Booking;