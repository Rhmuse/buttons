import { fetchReservations } from '../api/dataAccess.js';
import { Buttons } from './Buttons.js';

let main = document.querySelector("#main-container");

const renderHtml = () => {
    fetchReservations()
        .then(() => {
            main.innerHTML = Buttons();
        })
};

renderHtml(); 