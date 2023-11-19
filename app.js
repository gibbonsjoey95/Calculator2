const buttons = document.querySelectorAll("button")
const outputField = document.getElementById("outputField")
const outputFieldResult = document.getElementById("outputFieldResult")
const equalButton = document.getElementById("equalButton")

let output = ''
let outputResult = ''

equalButton.addEventListener('click', function(){
    output = outputResult
    outputResult = ''
})

buttons.forEach((button) => {
    button.addEventListener('click', function(){
        output += this.textContent
        outputField.value = output
        outputFieldResult.value = calculateEquation(output)
    })
})

const calculateEquation = (equation) => {
    return eval(equation)
}