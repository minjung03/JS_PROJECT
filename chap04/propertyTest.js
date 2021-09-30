"use strict" // 꼭 쓰기

let user = { 
    name : "John" ,
     age : 30
};
let key = prompt("사용자의 어던 정보를 얻고 싶으신가요? 키를 입력하세요");
alert(user[key]); // 키 값을 변수로 접근, 이럴시에는 []를 쓴다!
// alert(user.key);  <- undefined 나온다.
