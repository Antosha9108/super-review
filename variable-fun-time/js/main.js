//--- Easy
//create a variable and assign it a number
let num = 55;
//minus 10 from that number
num = num -10;
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
// let askValue = Number(document.querySelector('#danceDanceRevolution').value)
//add 25 to that number
// askValue +=25
//alert that number
// alert(askValue)
//--- Hard
//create a variable that holds the h1
let getH1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
getH1.addEventListener('click', addTwo)

function addTwo(){
    
    let askValue = Number(document.querySelector('#danceDanceRevolution').value)
    askValue +=25
    console.log(num+askValue)
}