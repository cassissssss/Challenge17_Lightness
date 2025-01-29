import { generatePalette } from "./modules/utils";

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Récupérer la valeur de l'input
    const hsl = input.value;

});
