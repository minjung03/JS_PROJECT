"use strict"

let phrase = "Hello";

if(true){
    let user = "John";

    function sayHi(){
        console.log( `${phrase}, ${user}`);
    };
}

sayHi(); 
// 오류. 함수를 if문 안에 정의하였기 때문에 오직 if문 안에서만 호출이 가능하다.
// js의 코드블럭은 강력!
// 이런 것도 틀릴 수 있을 것 같음..