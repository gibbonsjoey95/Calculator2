const operator_button = document.querySelectorAll(".operator-button")
const outputField = document.getElementById("outputField")
const outputFieldResult = document.getElementById("outputFieldResult")
const equalButton = document.getElementById("equalButton")

let output = ''

equalButton.addEventListener('click', function(){
    console.log('output', output)

    outputField.value = outputFieldResult.value
    output = outputField.value

    outputFieldResult.value = ''

    console.log('output2', output)
})


operator_button.forEach((button) => {
    button.addEventListener('click', function(){
        output += this.textContent
        outputField.value = output

        if(!isNaN(parseInt(output[0])) && !isNaN(parseInt(output.slice(-1)))){
            outputFieldResult.value = eval(output)
        }
    })
})
