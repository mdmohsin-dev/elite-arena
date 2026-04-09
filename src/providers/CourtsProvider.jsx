import { createContext, useEffect, useState } from "react";
import { getCourt } from "../utility/addToDb";

export const CourtsContext = createContext([])

const CourtsProvider = ({ children }) => {



    const [courts, setCourts] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedCourt, setSelectedCourt] = useState(null)
    const [selectedSlot, setSelectedSlot] = useState("");
    const [reviews, setReviews] = useState([])
    const [selectDate, setSelectDate] = useState("")
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch("/courts.json")
            .then(res => res.json())
            .then(data => setCourts(data))
    }, [])

    useEffect(() => {
        fetch("/review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    useEffect(() => {
        const data = getCourt()
        setBookings(data)
    }, [])

    const value = {
        courts,
        reviews,
        showModal,
        setShowModal,
        selectedSlot,
        setSelectDate,
        selectDate,
        selectedCourt,
        setSelectedSlot,
        setSelectedCourt,
        bookings,
        setBookings
    }

    return (
        <CourtsContext.Provider value={value}>
            {children}
        </CourtsContext.Provider>
    );
};

export default CourtsProvider;