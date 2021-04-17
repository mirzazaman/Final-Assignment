let num = 46;
console.log("Number =", num);

if (num % 5 === 0 && num % 11 === 0){
    console.log("Number is Divisible by 5 and 11");
}   else if (num % 5 === 0){
    console.log("Number is Divisible by 5");
}   else if (num % 11 === 0){
    console.log("Number is Divisible by 11");
}   else {
    console.log("Number is not Divisible (by 5 and 11)");
}