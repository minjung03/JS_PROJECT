"use strict"

setValue(10,20); 
// 선언 함수는 js가 static 개념으로 위에 올려놓고 동작한다.
function setValue(one, two){  // 선언 함수 형태(위치에 관계없이 실행)

    let total = one +two;
    console.log(total);
};



function showMessage(from){  // 이 함수는 덮어씌어져 아예 사라져 버린다.(주의하기)
    console.log(from);       // 살리고 싶음 이름을 다르게 주기!
};

showMessage("홍길동"); // 여기도 '홍길동 환영합니다'가 출력된다 왜?
// java와 c에서는 동일한 함수 이름 사용 불가하다(?)
// js는 동일한 이름의 함수 선언이 가능하지만, 
// 제일 아래에 선언한 함수가 같은 이름의 함수를 덮어씌워버립니다.
function showMessage(from, text = " 환영합니다."){  // 위의 showMessage를 오버라이트
    console.log(from + text);
};

showMessage("홍길동");


function showCount(count){
    console.log(count ?? "unkown") // count가 null,undefind가 아니면 처음 정의된 값을 리턴
    // || 는 첫 true 값을 리턴 , ?? 특징/차이점 잘 알기
}
showCount();


// return 주의 사항 테스트
function getPoint(){
    return 
    10*20;   // js는 자동 ;기능이 있어 줄바꿈 쓰면 안된다
}
let result = getPoint();
console.log(result);