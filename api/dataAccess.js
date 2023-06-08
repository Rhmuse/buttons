const appState = {
    reservations: [],
};

const API = "http://localhost:8088";

export const setReservation = (reservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservation)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(res => res.json())
};

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(res => res.json())
        .then(
            (res) => {
                appState.reservations = res;
            }
        )
}

export const getReservations = () => {
    return appState.reservations.map(reservation => ({ ...reservation }))
}