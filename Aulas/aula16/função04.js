// Cálculo de factorial
function factorial(num) {
    var fact = 1
    for(let c = num; c > 1; c--){
        fact *= c
    }
    return (fact)
}
console.log(factorial(5))