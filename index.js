const buttons = document.querySelectorAll(".btn");

const randrange = (min = 0, max) =>
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getInputAll = () => 
{
    for (let i = 0; i < data.inputs.path.length; i++)
    {
        data[data.inputs.path[i]].value = clearInput(data.inputs.variables[i].value);
    }

    checkInput();
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
            input = String(input);

            for (let i = 0; i < input.split(",").length--; i++)
            {
                input = input.replace(",", "");
            }

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

            output.innerHTML = "<p>Generate</p>";

            let allPassWords = "";

            for (let passWordGen = 1; passWordGen <= data.passWords.value; passWordGen++)
            {  
                let passWord = [];
                let out = "";
                
                data.inputs.caraVals.forEach(path =>
                {
                    let caraters = data[path];
    
                    for (let i = 0; i < caraters.value; i++)
                    {
                        let letter;
    
                        do 
                        {
                            letter = caraters.list[randrange(0, caraters.list.length - 1)];
                        } while (letter === undefined);
    
                        passWord.push(letter);
                    }
                })
    
                passWord = passWord.sort(() => Math.random() - 0.5);
                
                passWord.forEach(carater => 
                {
                    out += carater;
                })


                // allPassWords += (`<p>${passWordGen}) ${String(out)}</p>`);
                allPassWords += (`${passWordGen}) ${String(out)}<br><br>`);
            }

            output.innerHTML = allPassWords;

            console.log(output);
        }
        else if (button.id === "clear-all")
        {
            for (let input = 0; input < data.inputs.variables.length; input++)
            {
                console.log(data.inputs.variables[input]);
            }

            getInputAll();
        }
    })
})