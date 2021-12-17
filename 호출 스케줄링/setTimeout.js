"use strict"

function sayHi(){
    console.log("안녕하세요");
}
setTimeout(sayHi, 5000) // 밀리초, 5초 후

function sayHiname(who, phrase){
    console.log(who + "님, "+phrase);
}
setTimeout(sayHiname, 3000, "홍길동", "안녕하세요");



let st1 = setTimeout(function sayHi(){
    console.log("안녕하세요!");
}, 2000) // sayHi 함수를 2초 후에 실행

st1;
clearTimeout(st1); // 꼭 클리어 해주기. 메모리 문제
// 근데 2초 후 실행이라 출력이 안됨