import { generatePalette, isHexColor, hexToCSSHSL } from "./modules/utils.js";
import { Color } from "./modules/Color.js";
import * as convert from 'color-convert';
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

//Instancier Notyf
const notyf = new Notyf();

const form = document.querySelector('form');
const input = document.querySelector('input');
const colorContainer = document.querySelector('main');
const bodyElement = document.querySelector('body');

const handleForm = (e) => {
    try {
        e.preventDefault();

        const inputValue = input.value;

        if (!isHexColor(inputValue)) {
            throw new Error(`${inputValue} is not a valid hex color`);
        }

        const palette = generatePalette(inputValue);

        console.log(inputValue, palette);

        displayColors(inputValue, palette);

    } catch (error) {
        notyf.error(error.message);
    }
};

const displayColors = (input, palette) => {

    //Reset le container
    colorContainer.innerHTML = '';

    //Activer l'animation css pour afficher les couleurs
    const headerElement = document.querySelector('header');
    headerElement.classList.add('minimized');

    document.documentElement.style.setProperty('--shadow-color', hexToCSSHSL(input));

    //Redéfinir le background du body avec le nouveau dégradé
    const gradientColors = [0, Math.round(palette.length / 2), palette.length - 1].map((i) => `#${convert.hsl.hex(palette[i])}`);

    //Ombre du container
    document.body.style.background = `linear-gradient(-45deg, ${gradientColors.join(',')}`;

    //Redéfini background-size
    document.body.style.backgroundSize = '400% 400%';

    palette.map((c) => new Color(c).display(colorContainer));

};

form.addEventListener('submit', handleForm);

const handleClick = async (e) => {
    const color = e.target.closest('.color').dataset.color;

    //Copie de manière asynchrone la couleur dans le presse-papier
    await navigator.clipboard.writeText(color);
    //NOtification de succès
    notyf.success(`copied ${color} to clipboard`);
};

colorContainer.addEventListener("click", handleClick);



