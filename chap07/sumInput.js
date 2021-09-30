"use strict"

function sumInput(){

    let number = [];

    while(true){

        let num = prompt("숫자를 입력하세요");

        if(num == "" || num == null){      
            break;
        }
        else{
            number.push(+num);
        }
    }

    let sum = 0;
    for(let element of number){
        sum += element;
    }
    return sum;
}   
alert(sumInput());