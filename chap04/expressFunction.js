"use strict";

let a = function(){  //node.js 에서 이런 형태로 많이 쓴다.
    alert("Hello");
};

a();
alert(a);  // a의 함수 작성 내용이 보인다.

let b = a; // 함수 내용 그대로 복사 가능
let c = a;
b();  // a의 함수 내용과 같이 Hello 출력
c();  // a의 함수 내용과 같이 Hello 출력
