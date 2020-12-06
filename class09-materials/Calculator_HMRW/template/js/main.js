/*

HOW A CALCULATOR FUNCTIONS LOGIC*********

    --click on a button (number first)
    --changes the result section of the value of that button
    --**if you click on another value button it adds it to the result
    --Click on (+,-,*,/) arithmetic logic
        ** once arth. logic is clicked store the result to a variable in a function
        ** take stored variable and use string interpolation to add the arithmetic logic
            to the stored variable
        **  reset the value inside of the "result" but NOT the stored variable
        ** create same step - add additional button clicks to the results IE 5 then 5 creates 55 (use array method that adds to the end of the array)
    -- click on equals to get answer
        taking the stored value + arithmetic logic + new result value which will then display the result

*/

// create a section for DOM buttons

const btnContainer = document.querySelector('.bottom_buttonContainer')

let displayResult= [];
let enteredValues = []
let noString = []
let results = []

function grabId (button) {
    let id = button.innerHTML
        displayResult += id 
}

btnContainer.addEventListener("click",(event) => {
    if ((event.target.id === "equals")) {
            compute()
            return
    }

    if (event.target.tagName === "BUTTON") {
        if (isFinite(+event.target.innerHTML)) {
            grabId(event.target)
        } else {
            if (event.target.id === "multiply") {
                multiply()
                return
            } else if (event.target.id === "divide") {
                division ()
                return
            } else if (event.target.id === "minus") {
                subtraction ()
                return
            }else if (event.target.id === "plus") {
                addition ()
                return
            } else if (event.target.id === "clear") {
                clear ()
                return
            } else if (event.target.id === "negative") {
                negative ()
                return
            } else if (event.target.id === "decimal") {
                decimal ()
                return
            } else if (event.target.id === "percent") {
                percent ()
                return
            }  else {
                console.log('you don Fucked up A-aaron')
            }
       
        }
        valueHolder(displayResult)  
    }
   })

function valueHolder (x) {
       result.innerHTML = x 
   }

function logicHolder (x) {
    logicResult.innerHTML = x 
}

function compute () {
    enteredValues.push(+displayResult)
    noString = enteredValues.join('')
    results = eval(noString)
    logicHolder(noString)
    valueHolder(results)
}

function clear () {
    noString = []
    displayResult = []
    enteredValues = []
    valueHolder(displayResult)
    logicHolder(displayResult)
}

function multiply () {
    enteredValues.push(+displayResult)
    enteredValues.push('*')
    noString = enteredValues.join('')
    logicHolder(noString)
    displayResult= " "
    valueHolder(displayResult)
}

function division () {
    enteredValues.push(+displayResult)
    enteredValues.push('/')
    noString = enteredValues.join('')
    logicHolder(noString)
    displayResult= " "
    valueHolder(displayResult)
}

function subtraction () {
    enteredValues.push(+displayResult)
    enteredValues.push('-')
    noString = enteredValues.join('')
    logicHolder(noString)
    displayResult= " "
    valueHolder(displayResult)
}

function addition () {
    enteredValues.push(+displayResult)
    enteredValues.push('+')
    noString = enteredValues.join('')
    logicHolder(noString)
    displayResult= " "
    valueHolder(displayResult)
}

function negative () {
    console.log('test')
        enteredValues.unshift("-")
        valueHolder(- + displayResult)  
} 

function decimal () {
    let updatedDisplay = displayResult + "."
    displayResult = updatedDisplay
    valueHolder(updatedDisplay)
}

function percent () {
    let updatedDisplay = displayResult * 100
    console.log(updatedDisplay)
}
