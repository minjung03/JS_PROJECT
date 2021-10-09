"use strict"

let user ={
    firstname : "길동",
    lastname : "홍",
    
};

function func1(){
    console.log(this.lastname + this.firstname);
}
let funcUser1 = func1.bind(user); // func1의 this는 user이다 정의 -> 못바꿈
funcUser1();


function func2(p) {
    console.log(p+", "+this.lastname + this.firstname);
}
let funcUser2 = func2.bind(user); // func2의 this는 user이다 정의
funcUser2("Hello");