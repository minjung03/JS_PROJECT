"use strict"

function sum(a){

    return function(b){
        return a+b;
    };
}

// 값을 기억하고 있어 이런 형태로 호출? 가능. 클로저**
console.log(sum(1)(2));
console.log(sum(5)(-1));