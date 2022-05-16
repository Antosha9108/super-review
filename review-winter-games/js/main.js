//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenSteven(arr){
    let onlyEvens = []
    arr.forEach(num => {
        if (num%2==0){
            onlyEvens.push(num)
        }
    })
    return onlyEvens
}

console.log(evenSteven([1,2,3,4,5,6]))