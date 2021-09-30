"use strict";

// function checkAge(a){  // a 매개변수 - 지역 변수, 함수 종료 후 사라짐

//     if(a >= 18){
//         return true;
//     }
//     else {
//         return confirm("재인증을 받으세요");
//     }
// }

// let age = prompt("나이 입력");
// checkAge(age); // 정확하게 따지면 age가 매개변수 a는 아규먼트
// // alert(a); // 함수 종료 후 사라져 출력 불가능

// function getMin(num1,num2){

//     if(num1>num2){
//         return alert("더 작은 수는 : "+num2);
//     }
//     else {
//         return alert("더 작은 수는 : "+num1);
//     }
// }

// let num1 = prompt("1번째 숫자 입력");
// let num2 = prompt("2번째 숫자 입력");
// getMin(num1,num2);


function pow(x,n){

   let num = 1;

  for (let i = 1; i <= n; i++) {
       num *= x;
  }
  return num;
}

let n1 = prompt("1번째 숫자 입력");
let n2 = prompt("2번째 숫자 입력");

alert(pow(n1,n2));


let age = prompt("나이를 알려주세요",18);

let welcome = (age < 18) ?
               () => alert("안녕") :
               () => alert("안녕하세요");
welcome();


