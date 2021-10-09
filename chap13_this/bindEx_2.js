"use strict"

function f(){
    console.log(this.name);
}

f = f.bind( {name : "John"}).bind( {name : "Ann"})
// 다시 한번 bind를 적용해도 값이 바뀌지 않는다.

f();