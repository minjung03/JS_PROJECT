"use strict";

// yes이면 yes, no면 no
function ask(question, yes, no){  // semantic 시맨틱하게 작성(의식의 흐름대로)
    if(confirm(question)) yes(); // showOk 호출
    else no();  // showNo 호출
}
function showOk(){ // 실제 호출
    alert("동의하셨습니다.");
}
function showNo(){ // 실제 호출
    alert("동의하지 않으셨습니다.")
}

ask("동의하십니까?", showOk, showNo);

// ask의 인수인 showOk ,showNo를 콜백함수 라고 부른다. (뒤에서 호출한다)