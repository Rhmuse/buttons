const appState = {};

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
        .then(res => {
            res.json()
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
};

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(res => res.json())
        .then(
            (reservations) => {
                appState.reservations = [];
                for (const reservation of reservations) {
                    if (reservation.visible) {
                        appState.reservations.push(reservation);
                    }
                }
            }
        )
}

export const getReservations = () => {
    return appState.reservations.map(reservation => ({ ...reservation }))
}

export const deleteReservation = (reservation) => {
    reservation.visible = false;

    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservation)
    }

    return fetch(`${API}/reservations/${reservation.id}`, fetchOptions)
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(res => res.json())
        .then(clowns => appState.clowns = clowns)
}

export const getClowns = () => {
    return appState.clowns.map(clown => ({ ...clown }))
}

export const setCompletedReservation = (completedReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedReservation)
    }

    return fetch(`${API}/completed_reservations`, fetchOptions)
        .then(res => {
            res.json()
            document.dispatchEvent(new CustomEvent("stateChanged"))
        });
}