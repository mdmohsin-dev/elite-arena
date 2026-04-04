import { createContext, useEffect, useState } from "react";

export const CourtsContext = createContext([])

const CourtsProvider = ({ children }) => {



    const [courts, setCourts] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedCourt, setSelectedCourt] = useState(null)
    const [selectedSlot, setSelectedSlot] = useState("");
    const [reviews, setReviews] = useState([])

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

    const value = {
        courts,
        reviews,
        showModal,
        setShowModal,
        selectedSlot,
        selectedCourt,
        setSelectedSlot,
        setSelectedCourt
    }

    return (
        <CourtsContext.Provider value={value}>
            {children}
        </CourtsContext.Provider>
    );
};

export default CourtsProvider;