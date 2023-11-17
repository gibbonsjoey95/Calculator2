const buttons = document.querySelectorAll("button")
const outputField = document.getElementById("outputField")
const outputFieldResult = document.getElementById("outputFieldResult")

let output = ''
let outputResult = ''

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