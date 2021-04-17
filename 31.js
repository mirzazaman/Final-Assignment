let num = 33;

evenOdd(num)

function evenOdd(num) {
    if(num % 2 === 0){
        console.log(num, "is Even");
    }   else {
        console.log(num, "is Odd");
    }
}