"use strict"

let me = {

    firstname : "홍",
    lastname : "길동",

    introduce(){
        console.log(`My name is ${this.firstname}${this.lastname} 입니다`);
        // window.firstname window.lastname 으로 본다.
    }
};
me.introduce(); // 동작
// setTimeout(me.introduce(), 1000); // 동작 안함
// setTimeout은 this를 window로 할당한다.

// 래퍼. 아래의 형태로 작성

// 함수 선언 방식
setTimeout(function(){
    me.introduce();
}, 1000);
// 화살표 함수 방식
setTimeout(() => me.introduce(), 1000);


// 문제 ** 딜레이 발생 시 this가 날라간다.
// 나중에 변화를 시켰는데도 Hi가 나온다. 왜냐면 위 1000의 딜레이 때문 -> 이 문제 해결을 위해 Bind 사용
me = {
    introduce(){
        console.log("Hi");
    }
}