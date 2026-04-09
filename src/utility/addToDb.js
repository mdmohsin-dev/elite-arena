const getCourt = () => {
    const storedCourtStr = localStorage.getItem("court")

    if (storedCourtStr) {
        const court = JSON.parse(storedCourtStr)
        return court
    }
    else {
        return []
    }

}



const saveCourt = (booking) => {
    const storedCourt = getCourt()

    const exist = storedCourt.find(item =>
        item.id === booking.id
    )

    if (exist) {
        return
    }
    else {
        storedCourt.push(booking)

        localStorage.setItem("court", JSON.stringify(storedCourt))
    }
}



export { getCourt, saveCourt }