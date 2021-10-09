"use strict"

let value = "이름이 같은 다른 변수";

function f(){
    let value = "가장 가까운 변수";
    function g(){
        debugger;
    }
    return g;
}

let g = f();
g();
alert(value);
