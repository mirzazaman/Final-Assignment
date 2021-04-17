let a = 5, b = 4 ;
console.log("Num1 =", a, "Num2 =", b);

minMax(a,b);

function minMax(a,b) {
let min , max
    if (a > b){
        max = a;
        min = b;
    }   else {
        max = b;
        min = a;
    }

console.log("Minimum number is", min);
console.log("Maximum number is", max);
}