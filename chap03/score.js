"use strict"

let num;
while(true){
    num = prompt("점수를 입력하세요");

    if(num >= 0 && num <=100 && !num){  
        break;
    }
};