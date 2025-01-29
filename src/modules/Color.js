"use strict";

import * as convert from 'color-convert';


export class Color {

    #hsl;
    #hex;
    #element;

    constructor(hsl) {
        this.#hsl = hsl;

        // Converti la valeur hsl en hexadécimal
        this.#hex = `#${convert.hsl.hex(hsl)}`;

        // Crée l'élément DOM
        this.#element = this.#generateElement();
    }

    #generateElement() {
        // Crée un élément div
        const colorElement = document.createElement('div');
        // J'ajoute la classe color
        colorElement.classList.add('color');
        // J'ajoute l'attribut data-color
        colorElement.dataset.color = this.#hex;
        // Je change la couleur de fond
        colorElement.style.backgroundColor = this.#hex;

        // Je crée l'élément p
        const textElement = document.createElement('p');
        // J'ajouter comme texte la valeur hexadécimal
        textElement.textContent = this.#hex;

        if (this.#hsl[2] < 60) {
            textElement.style.color = '#ffffff';

        } else {
            textElement.style.color = '#000000';
        }
        return colorElement;
    }

    display(parentElement) {
        parentElement.appendChild(this.#element);
    }

}

