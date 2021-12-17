"use strict"

let timeId = setTimeout(function clock() {
    let today = new Date(); // 현재 날짜를 가진 date객체 생성
    let now = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    console.log(now);
    timeId = setTimeout(clock, 1000); // **중요
}, 1000);

// 1초 주기로 1초 간격 실행