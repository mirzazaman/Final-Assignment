let a = 5, b = 4 ;
console.log("Num1 =", a, "Num2 =", b);

minMax(a,b);

function minMax(a,b) {
let max
    if (a > b){
        max = a;
    }   else {
        max = b;
    }

console.log("Maximum number is", max);
}