"use strict"

function f() {
    console.log( this ); // null
}
  
let user = {
    g: f.bind(null)
    // 여기 ; 안붙임 **
};
  
user.g();

// null이 나온다. bind를 적용한 함수의 컨텍스트는 완전히 고정