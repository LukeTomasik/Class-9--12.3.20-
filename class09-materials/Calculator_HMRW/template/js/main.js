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

-Create section for DOM - buttons
    - convert a string to a number
-create functions for +,-,*,/,
-create function to hold value
-create function to clear value

*/

// loads functions on window load

window.onload = init

function init () {
    
    console.log('Lets do some math!')
}

// create a section for DOM buttons

const btnContainer = document.querySelector('.bottom_buttonContainer')

//     let result = document.getElementById('result')
//     let ac = document.getElementById('clear')
//     let negative = document.getElementById('negative')
//     let percent = document.getElementById('percent')
//     let divide = document.getElementById('divide')
//     let seven = document.getElementById('seven')
//     let eight = document.getElementById('eight')
//     let nine = document.getElementById('nine')
//     let multiply = document.getElementById('multiply')
//     let four = document.getElementById('four')
//     let five = document.getElementById('five')
//     let six = document.getElementById('six')
//     let minus = document.getElementById('minus')
//     let one = document.getElementById('one')
//     let two = document.getElementById('two')
//     let three = document.getElementById('three')
//     let plus = document.getElementById('plus')
//     let zero = document.getElementById('zero')
//     let dot = document.getElementById('dot')


// let calculatorNumbers = [seven,eight,nine,four,five,six,one,two,three,zero]


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
