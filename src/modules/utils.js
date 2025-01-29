"use strict"

import * as convert from 'color-convert';

export const generatePalette = (hex) => {
    convert.hex.hsl('ffffffff'); // [0, 0, 100]

    const colors = [];

    const [h, s] = convert.hex.hsl(hex);

    for (let i = 0; i <= 100; i += 10) {
        colors.push([h, s, i]);
    }

    return colors;
};

export const hexToCSSHSL = (hex) => {
    // Transforme la valeur hexadécimal en hsl
    const hsl = convert.hex.hsl(hex);
    //Retourne une chaine de caractères au format css
    return `hsl(${hsl[0]}deg, ${hsl[1]}%, ${hsl[2]}%)`;
}

export const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);