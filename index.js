const buttons = document.querySelectorAll(".btn");
const output = document.getElementById("output");
const asciiLow = document.getElementById("letters-low");
const asciiUpper = document.getElementById("letters-upper");
const punctuation = document.getElementById("Punctuation");
const numbers = document.getElementById("num");
const space = document.getElementById("space");
const passWords = document.getElementById("passwords-num");

const generateNumber = (min = 0, max) =>
{
    return Math.floor(Math.random() * (max * min + 1) + min);
}

const getInputAll = () => 
{
    for (let i = 0; i < data.inputs.path.length; i++)
    {
        let clear = clearInput(data.inputs.variables[i].value);
        data[data.inputs.path[i]].value = clear;
    }

    console.log(data);
}

const clearInput = (input) => 
{
    input = String(input);

    if (input !== "" && input !== undefined) 
    {
        input = String(input).split("");
        input = input.filter(x => data.digits.indexOf(x) !== -1);

        if (input !== []) 
        {
            input = parseInt(String(input).replace(",", ""));
            return input;
        }
    }
    
    return;
}

const checkInput = () =>
{
    data.inputs.path.forEach(path =>
    {
        let input = data[path];

        if (input.value === undefined)
        {
            input.value = input.default;
        }
    })
}

buttons.forEach(button => 
{
    button.addEventListener("click", Event => 
    {
        if (button.id === "start") 
        {
            getInputAll();

            let carateres = [];
        }
    })
});
