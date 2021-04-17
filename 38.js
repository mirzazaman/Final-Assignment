let num = 0;

days(num);

function days(num)
{
switch (num) {

case 0: 
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
    break;

    default:
        alert("Not a valid day");
    break;  

}
};