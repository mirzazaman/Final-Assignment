let num = 6;

numOfDays(num);

function numOfDays(num) {
    switch (num) {
            case 1:
                console.log("31 Days in January");
                break;
            case 2:
                console.log("28 Days in February");
                break;
            case 3:
                console.log("31 Days in March");
                break;
            case 4:
                console.log("30 Days in April");
                break;
    
            case 5:
                console.log("31 Days in May");
                break;
            case 6:
                console.log("30 Days in June");
                break;
                            
            case 7:
                console.log("31 Days in july");
                break;
                
            case 8:
                console.log("31 Days in August");
                break;
                
            case 9:
                console.log("30 Days in September");
                break;
                
            case 10:
                console.log("31 Days in October");
                break;
                
            case 11:
                console.log("30 Days in November");
                break;
                
            case 12:
                console.log("31 Days in December");
                break;
            default:
                console.log("Enter valid month");
                break;
    }
}