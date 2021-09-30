"use strict";

let age;
let messeage;

age = prompt("나이를 입력 : ");

// if(age < 3){
//     messeage = "아기야 안녕?";
// }
// else if(age < 18){
//     messeage = "안녕!";
// }
// else if(age < 100){
//     messeage = "환영합니다!";
// }
// else {
//     messeage = "나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!";
// }
// alert(messeage);

messeage = (age < 3) ? "아기야 안녕?" :
           (age < 18) ? "안녕!" :
           (age < 100) ? "환영합니다!" :
           "나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!" ;
alert(messeage);