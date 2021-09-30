"use strict";

//어떻게 고칠까?

/*
let age = prompt("나이 입력");
let welcome; // 전역 변수로 함수 이름 정의

// 어떤거는 표현식을, 어떤거는 선언식을 사용해야 할 때가 있다.

if(age < 18){
    welcome = function(){  // 표현식 형태로 고쳐줘야 한다.
        alert("청소년 입니다. 환영합니다.");  
        
    }
}
else{
    welcome = function(){
        alert("성인 입니다. 환영합니다.");
    }
}

welcome(); 
*/

// if, else 할때 이러한 방식으로 하기**
let age = prompt("나이를 알려주세요",18);
let welcome = (age < 18) ?
              function(){  alert("안녕!"); } :
              function(){  alert("안녕하세요!"); } ;
welcome();