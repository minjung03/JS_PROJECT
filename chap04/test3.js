"use strict"

let stationary = prompt("어떤 학용품을 구매하시겠습니까?");

let beg = {
    [stationary] : 10 // [] 꼭 쓸 필요는 없는 것 같음
};

alert(beg[stationary]); // [] 꼭 쓸 필요는 없는 것 같음

let cnt = Number(prompt("몇 개 구입하시겠습니까?"));
beg[stationary] = 10+cnt; // 키 값을 연산할 때 사용시 []를 써주어야 함!

alert(beg.stationary);

