"use strict";

function makeCounter() {
    let count = 0;

    return function(){  // 함수를 리턴하는 함수(클로저)
        return ++count;
    }
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());