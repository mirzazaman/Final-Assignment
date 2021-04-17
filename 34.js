let a = 9, b = 7, c = 6 ;
console.log("Num1 =", a, "Num2 =", b, "Num3 =", c);

minMax(a,b,c);

function minMax(a,b,c) {
let max
    if (a > b && a > c){
        max = a;
    }   else if (b > a && b > c){
        max = b;
    }   else {
        max = c
    }

console.log("Maximum number is", max);
}