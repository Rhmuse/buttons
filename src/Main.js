import { fetchClowns, fetchReservations } from '../api/dataAccess.js';
import { Buttons } from './Buttons.js';

const main = document.querySelector("#main-container");

document.addEventListener(
    "stateChanged",
    customEvent => {
        renderHtml();
    }
)

const renderHtml = () => {
    fetchReservations()
        .then(() => fetchClowns())
        .then(() => main.innerHTML = Buttons())
};

renderHtml(); 