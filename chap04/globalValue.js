"use strict";

let age = 17;  // 전역 변수

let year = prompt("년도 입력");

function checkAge(){ // 나이 체크하는 함수

    if(year == 2022){
        age++;  // 전역 변수를 건드린다.(함수 안에서 전역 변수 값을 건드리지 않게 해야함)
    }
    else if(!year){  //입력 값이 없다면
        alert("올바른 년도 입력");
    }
    else{
        age += (year - 2021);
    }
}
checkAge();

if(age >= 18){
    alert("성년 입니다.");
}
alert(`당신의 나이 : ${age}`);  // 2022를 입력 했을 때, 내 나이는 17세 이지만, 18세가 나와버린다.