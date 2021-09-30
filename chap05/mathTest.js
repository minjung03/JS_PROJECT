"use strict"

console.log("Math.floor(첫째 자리에서 버림)");
console.log("3.1 : "+Math.floor(3.1));
console.log("3.6 : "+Math.floor(3.6));
console.log("-1.1 : "+Math.floor(-1.1));
console.log("-1.6 : "+Math.floor(-1.6));
console.log("======================");

console.log("Math.ceil(첫째 자리에서 올림)");
console.log("3.1 : "+Math.ceil(3.1));
console.log("3.6 : "+Math.ceil(3.6));
console.log("-1.1 : "+Math.ceil(-1.1));
console.log("-1.6 : "+Math.ceil(-1.6));
console.log("======================");

console.log("Math.round(첫째 자리에서 반올림)");
console.log("3.1 : "+Math.round(3.1));
console.log("3.6 : "+Math.round(3.6));
console.log("-1.1 : "+Math.round(-1.1));
console.log("-1.6 : "+Math.round(-1.6));
console.log("======================");

let num = 3.456;
console.log("toFixed()(소수점 처리하기/반환은 *문자열*)");
console.log("숫자로 사용하고 싶으면 +/Number 형변환하기!");
console.log("num = 3.456");
console.log("num.toFixed(3) : "+ Number(num.toFixed(3)));
console.log("num.toFixed(2) : "+ +num.toFixed(2));
console.log("num.toFixed(1) : "+ num.toFixed(1));
console.log("======================");
