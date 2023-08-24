// Cálculo de factorial
function factorial(num) {
    for(let c = num; c > 1; c--){
        c*= (c-1)
    }
    return (c)
}
console.log(factorial(5))