"use strict";

// 돔과 js 연결 기초

// 값이 string으로 넘어오니 초기화를 빈 문자열로.
// , 로 선언X (타입을 모르니)
let num1 = ""; // 1번째 수 
let num2 = ""; // 2번째 수
let operator = ""; // - id와 같은 이름의 변수를 사용할 수도 있다.

let op_value = document.querySelector("#operator"); // html 문서 중 "operator" id를 가진 것들을 가져오기
let result_value = document.querySelector("#result");


// 함수 하나로 작성하기
let onClickNumber = (number) => {
    return (event) => {
        if(operator){           
            if(!num2){
                result_value.value = " ";
            } 
            num2 += number;
        }
        else num1 += number;
    
        result_value.value += number;
    }
};

let onClickOP = (op) => {
    return () => {
        if(!(num1)){
            alert("숫자를 먼저 입력해주세요!");
        }
        else {
            operator = op;
            op_value.value = op;
        }
    }
};

// querySelector -> id를 가지고 있는 요소를 꺼내온다.     addEventListener -> 동작을 취하게 한다.
// num-0인 요소를 클릭하면 {} 동작을 해!
// document.querySelector("#num-0").addEventListener("click", () => function(){ });  이런 형식도 가능!
document.querySelector("#num-0").addEventListener("click", () => { 
    // 함수 미사용 시
    if(operator){ // op 값이 있다면 2번째 숫자로 처리
        num2 += '0'; // num1, num2는 JS의 변수를 의미
    }
    else num1 += '0';

    result_value.value += '0'; // result_value는 html 요소를 의미
    // 화면에 값 출력(?)
}); 
document.querySelector("#num-1").addEventListener("click", onClickNumber(1));
document.querySelector("#num-2").addEventListener("click", onClickNumber(2));
document.querySelector("#num-3").addEventListener("click", onClickNumber(3));
document.querySelector("#num-4").addEventListener("click", onClickNumber(4));
document.querySelector("#num-5").addEventListener("click", onClickNumber(5));
document.querySelector("#num-6").addEventListener("click", onClickNumber(6));
document.querySelector("#num-7").addEventListener("click", onClickNumber(7));
document.querySelector("#num-8").addEventListener("click", onClickNumber(8));
document.querySelector("#num-9").addEventListener("click", onClickNumber(9));

document.querySelector("#plus").addEventListener("click", onClickOP('+'));
document.querySelector("#minus").addEventListener("click", onClickOP('-'));
document.querySelector("#divide").addEventListener("click", onClickOP('/'));
document.querySelector("#mul").addEventListener("click", onClickOP('*'));

document.querySelector("#clear").addEventListener("click", () => {
    
    // JS 변수
    num1 = " ";
    num2 = " ";
    operator = " ";

    // html 요소
    result_value.value = " ";
    op_value.value = " ";
});
document.querySelector("#equal").addEventListener("click", () => { 
    if(num2){

        switch(operator){
            case '+' : result_value.value = (Number(num1)+Number(num2)); break;
            case '-' : result_value.value = (Number(num1)-Number(num2)); break;
            case '*' : result_value.value = (Number(num1)*Number(num2)); break;
            case '/' : result_value.value = (Number(num1)/Number(num2)); break;
        }
    }
    else alert("2번째 숫자를 입력하세요!");

});

