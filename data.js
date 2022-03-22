const output = document.getElementById("output");
const asciiLow = document.getElementById("letters-low");
const asciiUpper = document.getElementById("letters-upper");
const punctuation = document.getElementById("Punctuation");
const numbers = document.getElementById("num");
const space = document.getElementById("space");
const passWords = document.getElementById("passwords-num");

const data = {
    asciiLow: {
        default: 3,
        value: 0,
        list: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    },
    asciiUpper: {
        default: 3,
        value: 0,
        list: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    numbers: {
        default: 3,
        value: 0,
        list: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    },
    punctuation: {
        default: 3,
        value: 0,
        list: ["!", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    },
    space: {
        default: 3,
        value: 0,
        list: [" ", " ", " "]
    },
    passWords: {
        default: 1,
        value: 0
    },
    inputs: {
        path: ["asciiLow", "asciiUpper", "punctuation", "numbers", "space", "passWords"],
        caraVals: ["asciiLow", "asciiUpper", "punctuation", "numbers", "space"],
        variables: [asciiLow, asciiUpper, punctuation, numbers, space, passWords]
    },
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
};
