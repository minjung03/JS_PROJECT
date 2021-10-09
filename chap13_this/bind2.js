"use strict"

function mul(a,b){
    return a*b;
}

let double = mul.bind(null,2); // 2가 고정된다.

console.log(double(3));
console.log(double(4));
console.log(double(5));