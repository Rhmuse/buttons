import { deleteReservation, getReservations, getClowns, setCompletedReservation } from '../api/dataAccess.js'

document.addEventListener(
    "click",
    e => {
        if (e.target.id.startsWith("reservation-button")) {
            const [, reservationId] = e.target.id.split("--");

            const reservations = getReservations();

            let foundReservation = reservations.find(reservation => reservation.id === parseInt(reservationId));

            deleteReservation(foundReservation);
        }
    }
)

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "clowns") {
            const [reservationId, clownId] = e.target.value.split("--");

            const completedReservation = {
                reservation_id: reservationId,
                clown_id: clownId,
                date_created: Date.now()
            }

            const reservations = getReservations();
            let foundReservation = reservations.find(reservation => reservation.id === parseInt(reservationId));

            deleteReservation(foundReservation);
            setCompletedReservation(completedReservation);
        }
    }

)

export const ReservationList = () => {
    const reservations = getReservations();
    const clowns = getClowns();

    let html = "<ul id='reservation-list'>";

    html += reservations.map(reservation => {
        return `<li class="reservation-list-item" id="reservation-list-item--${reservation.id}">
            <ul>
                <li class="reservation-details" id="parent_name--${reservation.id}">Parent's Name: ${reservation.parent_name}</li>
                <li class="reservation-details" id="child_name--${reservation.id}">Child's Name: ${reservation.child_name}</li>
                <li class="reservation-details" id="number_of_children--${reservation.id}">Number of Chilren: ${reservation.number_of_children}</li>
                <li class="reservation-details" id="address--${reservation.id}">Address: ${reservation.address}</li>
                <li class="reservation-details" id="date--${reservation.id}">Date: ${reservation.date}</li>
                <li class="reservation-details" id="length_of_reservation--${reservation.id}">Length of Reservation: ${reservation.length_of_reservation}</li>
            </ul>
            <button id="reservation-button--${reservation.id}" class="deny-button">Deny</button>
            <select class="clowns" id="clowns">
                <option value="">Choose</option>
                ${clowns.map(
            clown => {
                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
            }
            </select>
        </li>`
    }).join("<br />")

    html += "</ul>"
    return html;
}