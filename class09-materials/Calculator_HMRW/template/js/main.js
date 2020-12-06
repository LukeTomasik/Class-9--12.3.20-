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
    // add functions for calculator to work
    addEventListener()
    // storeId()
    console.log('Lets do some math!')
}

// create a section for DOM buttons

    let result = document.getElementById('result')
    let ac = document.getElementById('clear')
    let negative = document.getElementById('negative')
    let percent = document.getElementById('percent')
    let divide = document.getElementById('divide')
    let seven = document.getElementById('seven')
    let eight = document.getElementById('eight')
    let nine = document.getElementById('nine')
    let multiply = document.getElementById('multiply')
    let four = document.getElementById('four')
    let five = document.getElementById('five')
    let six = document.getElementById('six')
    let minus = document.getElementById('minus')
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')
    let plus = document.getElementById('plus')
    let zero = document.getElementById('zero')
    let dot = document.getElementById('dot')


let calculatorNumbers = [seven,eight,nine,four,five,six,one,two,three,zero]

// add event listeners to numbers

let id=0;
console.dir(calculatorNumbers)

function grabId () {
    let id =parseInt(this.innerHTML)
    console.log(id)
    //pass a function that displays the number in container
    valueHolder(id)
    return id
}



for (let i = 0; i < calculatorNumbers.length;i++) {
         calculatorNumbers[i].addEventListener('click', grabId)
}


// function storeId () {
//     let storeId;
//     for (let i = 0; i < calculatorNumbers.length;i++) {
//         console.log(this.id)
//         storeId = calculatorNumbers[i].id
//     }

//     return storeId
// }
// console.log(storeId())

function addEventListener () {
    for (let i= 0; i < calculatorNumbers.length; i++) {
        calculatorNumbers[i].addEventListener('click', valueHolder())
    }
}
// console.dir(nine)
// add even listeners to operations


//create function to hold values

function valueHolder (x) {
    result.innerHTML = " "
    // if ( x !== undefined ) {
    //     result.innerHTML = x
    // } 
    
}   

// works** valueHolder(calculatorDom.seven)


