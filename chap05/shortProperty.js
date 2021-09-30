"use strict"

/*
function makeUser(name,age){  // 생성자 메소드
    return {
        name : name,  // this.name = name 와 같은 개념
        age : age     // this.age = age
    };
}
*/

function makeUser(name,age){
    return {
        name,  // key와 매개변수 이름이 동일할 시에는 이런 식으로 쓴다!
        age    // 굉장히 독특한 형태이다. 실제로 이런 식으로 많이 사용하니 기억해두기!
    };
}

let name = prompt("이름 입력 : ");
let age = prompt("나이 입력 : ");

let user = makeUser(name,age);  // 생성자 메소드를 통해 user 객체 생성

alert(user.name);
alert(user.age);