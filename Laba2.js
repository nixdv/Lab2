
'use strict';

function ReturnNumber(number) {
    return number;
}

function ReturnArg(Item1, Item2) {
    if (isNaN(Item1)) {
        return ("a - not a number");
    }
    else {
        if (isNaN(Item2)) {
            return ("b - not a number");
        }
        else return Item1 + Item2;
    }
}

function Squaring() {
    let Array = [80, 50, "hhh", 30, "eeee"];
    console.log('Input data: ');
    console.log(Array);
    let NewArray = Array.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log('Answer:');
    console.log(NewArray);
}
