const operator_button = document.querySelectorAll(".operator-button")
const outputField = document.getElementById("outputField")
const outputFieldResult = document.getElementById("outputFieldResult")
const equalButton = document.getElementById("equalButton")
const clearButton = document.getElementById("clearButton")

let output = ''

equalButton.addEventListener('click', function(){
    outputField.value = outputFieldResult.value
    output = outputField.value
    outputFieldResult.value = ''
})

clearButton.addEventListener('click', function(){
    output = ''
    outputField.value = output
    outputFieldResult.value = output
})

operator_button.forEach((button) => {
    button.addEventListener('click', function(){
        output += this.textContent
        outputField.value = output

        if(!isNaN(parseInt(output[0])) && !isNaN(parseInt(output.slice(-1))) || !isNaN(parseInt(output[0])) && output.slice(-1) === '%'){
            outputFieldResult.value = eval(output)
        }
    })
})
