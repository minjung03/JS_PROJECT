"use strict";

let age = prompt("나이 입력");

// 얼핏 보면 출력될 것처럼 보인다.

if(age < 18){
    function welcome(){
        alert("청소년 입니다. 환영합니다.");  // if 코드 블럭 안에 정의 된 것. 
        //즉, 특정한 코드 블럭 안에 정의되어 있는 함수는 코드 블럭 밖에서 호출이 불가능
    }
}
else{
    function welcome(){
        alert("성인 입니다. 환영합니다.");
    }
}

welcome();