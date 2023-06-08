import { getReservations } from '../api/dataAccess.js'

export const ReservationList = () => {
    const reservations = getReservations();

    let html = "<ul id='reservation-list'>";

    for (const reservation of reservations) {
        html += `<li class="reservation-list-item" id="reservation-list-item--${reservation.id}">
        <ul>
            <li class="reservation-details" id="parent_name--${reservation.id}">Parent's Name: ${reservation.parent_name}</li>
            <li class="reservation-details" id="child_name--${reservation.id}">Child's Name: ${reservation.child_name}</li>
            <li class="reservation-details" id="number_of_children--${reservation.id}">Number of Chilren: ${reservation.number_of_children}</li>
            <li class="reservation-details" id="address--${reservation.id}">Address: ${reservation.address}</li>
            <li class="reservation-details" id="date--${reservation.id}">Date: ${reservation.date}</li>
            <li class="reservation-details" id="length_of_reservation--${reservation.id}">Length of Reservation: ${reservation.length_of_reservation} hours</li>
        </ul>
    </li>
    <br />`
    }

    html += "</ul>"
    return html;
}