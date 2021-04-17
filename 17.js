let number = 120534545353;
console.log(number);

digits(number);

function digits(number){
    let test = number.toString().length;
    console.log("Digits are",test);
    return test;
}