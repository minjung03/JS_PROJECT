"use strict";

function ask(question, yes, no){  
    if(confirm(question)) yes(); 
    else no();  
}

// 화살표 함수
ask(  // 매개변수 -> 문자열, 화살표함수1, 화살표함수2
    "동의하세요?",
     () => alert("동의하셨습니다."),
     () => alert("동의하지 않으셨습니다.")
);

// 나이 묻는 함수 화살표 함수로 고친 것
let age = prompt("나이를 알려주세요",18);
let welcome = (age < 18) ?
              () => alert("안녕") :
              () => alert("안녕하세요");
welcome();
