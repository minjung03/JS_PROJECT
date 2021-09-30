"use strict"
// 메소드 만듥


// 1번. 함수 표현식으로 함수를 만들고, 프로퍼티에 할당
let user = {
    name : "John",
    age : 30
};

user.sayHe = function(){
    console.log("안녕");
};


// 2번. 객체 리터럴 안에 메소드 선언(많이 쓰는 방법)

// 2-1
let user2 = {

    sayHi : function(){
        console.log("안녕");
    }
};

// 2-2 . 이 방법이 개인적으로 제일 쉬워보인다! 다른 언어랑 비슷하고~
let user3 = {

    sayHi(){
        console.log("안녕");
    }
};