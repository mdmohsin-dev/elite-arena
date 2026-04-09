import { useContext } from "react";
import { CourtsContext } from "../../providers/CourtsProvider";
import Booking from "./Booking";

const Bookings = () => {

    const { bookings, courts } = useContext(CourtsContext)

    const findBookings = bookings.map(booking => {
        const court = courts.find(c => c.id === booking.id)

        if (!court) return booking

        return {
            ...court,
            ...booking
        }
    })



    return (
        <div className="text-black pt-5">
            <h3 className="text-6xl font-bold text-center font-exo">My Bookings</h3>
            <div>
                {findBookings.map(booking => <Booking booking={booking}></Booking>)}
            </div>
        </div>
    );
};

export default Bookings;