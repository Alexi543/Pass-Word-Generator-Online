const data = {
    asciiLow: {
        default: 3,
        value: 0,
        list: String["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    },
    asciiUpper: {
        default: 3,
        value: 0,
        list: String["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    numbers: {
        default: 3,
        value: 0,
        list: String["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    },
    punctuation: {
        default: 3,
        value: 0,
        list: String["!", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    },
    space: {
        default: 3,
        value: 0,
        list: String[" "]
    },
    passWords: {
        default: 1,
        value: 0
    },
    inputs: {
        path: String["asciiLow", "asciiUpper", "punctuation", "numbers", "space", "passWords"],
        variables: HTMLElement[asciiLow, asciiUpper, punctuation, numbers, space, passWords]
    },
    digits: String["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
};
