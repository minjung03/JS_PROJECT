"use strict"

function makeCounter(){
    let count = 0;

    return function(){
        return count++; // 리턴 후 증가 => 0부터 시작
    };
}

// 둘은 다른 변수, 각각 렉시컬 환경을 다르게 만든다. 독립적이게 된 것
// ** 시험내면 다틀려..
// 전부 객관식이지만, 열심히 공부해놔..
let counter1 = makeCounter();
let counter2 = makeCounter();

console.log( counter1() ); //0
console.log( counter1() ); //1
console.log( counter2() ); //0
console.log( counter2() ); //1