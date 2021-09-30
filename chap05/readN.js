"use strict"

// 다음 시간 과제(완료)
// 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber을 구현해라
// 단, 사용자가 취소 버튼을 누르거나 값이 없을경우 null을 반환해라

let user;

function readNumber(){

    user = prompt("숫자를 입력하세요");
    
    while(isNaN(user)){  
        user = prompt("다시 입력해주세요");
    }
    
    if(user == null || user==""){
        return null;
    }
    else{
        return Number(user);
    }
}
alert(readNumber());



function readNumber(){

    user = prompt("숫자를 입력하세요");

    while(true){  

        if(user == null || user==""){
            return null;
        }
        else if(isNaN(user)){ 
            user = prompt("다시 입력해주세요");
        }
        else { 
            return Number(user);
        }
    }
}