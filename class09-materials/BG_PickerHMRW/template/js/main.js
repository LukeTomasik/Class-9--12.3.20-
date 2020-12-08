/*
TO DO:
-create variables for DOM
- Create Event listeners for Divs 
- create function to change background colors
- link functions to event listeners
- refractor code into a single function/object

*/

// DOM manipulation
// create variables for DOM

let testContainer = document.getElementById('test_container')

// top Section 

let topOne = document.getElementById('top_one')
let topTwo = document.getElementById('top_two')
let topThree = document.getElementById('top_three')
let topFour = document.getElementById('top_four')

// Top Section Event listeners

topOne.addEventListener('click', changeTopOne)
topTwo.addEventListener('click', changeTopTwo)
topThree.addEventListener('click', changeTopThree)
topFour.addEventListener('click', changeTopFour)

// Top section - function to change background color

function changeTopOne () {
    testContainer.style.backgroundColor = "#264653"
}
function changeTopTwo () {
    testContainer.style.backgroundColor = "#2A9D8F"
}
function changeTopThree () {
    testContainer.style.backgroundColor = "rgba(233, 196, 106,1)"
}
function changeTopFour () {
    testContainer.style.backgroundColor = "#F4A261"
}


////////////////////////////////////////////////////////////////////////////
// Array/Dry code



// create an array for DOM

let midOne = document.getElementById(`mid_one`)
let midTwo = document.getElementById('mid_two')
let midThree = document.getElementById('mid_three')
let midFour = document.getElementById('mid_four')

let botOne = document.getElementById('bot_one')
let botTwo = document.getElementById('bot_two')
let botThree = document.getElementById('bot_three')
let botFour = document.getElementById('bot_four')

let midArr = [midOne,midTwo,midThree,midFour,botOne,botTwo,botThree,botFour]

// create an array for colors

let midOneColor = '#FCB5B5';
let midTwoColor = '#824670';
let midThreeColor = '#D5A021';
let midFourColor = '#349AD5';

let botOneColor = '#04F06A';
let botTwoColor = '#ff2edc';
let botThreeColor = '#ff2323';
let botFourColor = '#4B36AB';

let arrColor = [midOneColor,midTwoColor,midThreeColor,midFourColor]

// create function that compares the ID of section with its background Color

function colorCompare (x) {
    if (x === 'mid_one') {
        testContainer.style.backgroundColor = midOneColor
    } else if ( x === 'mid_two')  {
        testContainer.style.backgroundColor = midTwoColor
    } else if ( x === 'mid_three')  {
        testContainer.style.backgroundColor = midThreeColor
    } else if ( x === 'mid_four')  {
        testContainer.style.backgroundColor = midFourColor
    } else if ( x === 'bot_one')  {
        testContainer.style.backgroundColor = botOneColor
    } else if ( x === 'bot_two')  {
        testContainer.style.backgroundColor = botTwoColor
    } else if ( x === 'bot_three')  {
        testContainer.style.backgroundColor = botThreeColor
    } else if ( x === 'bot_four')  {
        testContainer.style.backgroundColor = botFourColor
    } else {
        testContainer.style.backgroundColor = "#000"
    }
}

// Grabs ID of section that is clicked

function arrLoop() {
    console.log(this.id)
    let id = this.id
    colorCompare(id);
}

// Create a loop for array that adds Event Listener

for (let i = 0; i< midArr.length; i++) {
    midArr[i].addEventListener('click', arrLoop)
}

