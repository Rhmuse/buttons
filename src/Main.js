import { Buttons } from './Buttons.js';

let main = document.querySelector("#main-container");

const renderHtml = () => {
    main.innerHTML = Buttons();
};

renderHtml(); 