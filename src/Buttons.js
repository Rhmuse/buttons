import { setReservation } from '../api/dataAccess.js';
import { ReservationList } from './ReservationsList.js';

document.addEventListener(
    "submit",
    e => {
        e.preventDefault();
        const parentName = document.querySelector("input[name='parent-name']").value;
        const childName = document.querySelector("input[name='child-name']").value
        const totalChildren = document.querySelector("input[name='total-children']").value;
        const address = document.querySelector("input[name='address']").value;
        const date = document.querySelector("input[name='date']").value;
        const resLength = document.querySelector("input[name='res-length']").value;
        const ts = Date.now();

        const reservation = {
            parent_name: parentName,
            child_name: childName,
            number_of_children: totalChildren,
            address: address,
            date: date,
            length_of_reservation: resLength,
            ts: ts,
        };
        setReservation(reservation);
        document.querySelector("#submission-form").reset();
    }
)

export const Buttons = () => {
    let html = `
    <form id="submission-form">
        <label for="parent-name">Parent's Name</label><br />
        <input type="text" id="parent-name" name="parent-name"></input><br />
        <label for="child-name">Child's Name</label><br />
        <input type="text" id="child-name" name="child-name"></input><br />
        <label for="total-children">Number of Children at Party</label><br />
        <input type="text" id="total-children" name="total-children"></input><br />
        <label for="address">Address</label><br />
        <input type="text" id="address" name="address"></input><br />
        <label for="date">Date of Reservation</label><br />
        <input type="date" id="date" name="date"></input><br />
        <label for="res-length">Length of Reservation in Hours</label><br />
        <input type="number" id="res-length" name="res-length"></input><br />
        <input id="submit-button"type="submit" value="Submit"></input>
    </form>
    <br /> <br />
    ${ReservationList()}
    `

    return html;
};

