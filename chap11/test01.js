"use strict"

// 순서
let name = "John"; //2

function sayHi(){ //1
    console.log("Hi, " + name); // Pete이 출력된다. //4
    // undefined -> John 초기화 -> Pete로 값 변경
}
name = "Pete"; //3

sayHi();