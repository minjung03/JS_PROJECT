"use strict"

let timeId = setInterval(() => console.log('째각'), 2000);
// 문자열 사용시 화살표 함수 사용하는 예가 많다.

// 눈에 익혀두기**
setTimeout(() => {
    clearInterval(timeId);
    console.log('정지');
}, 5000);