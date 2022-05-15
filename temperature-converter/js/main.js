//Write your pseudo code first! 
//c to f
document.querySelector('h1').addEventListener('click',celciusToFahr)
//1 get the celcius temperature as a parameter
//2 find a formula
//3 console.log the result
function celciusToFahr(temp){
    let fahr = temp*(9/5)+32
    document.querySelector('h2').innerText = temp
}
