"use strict"

// 전역 객체 (window)
// 자바의 Object 느낌. 최상위?

alert("Hello");
window.alert("Hi");
// window.alert, window.prompt 사실 이런 형태로 쓰여져 왔었다.

// static 효과 var
var gVar = 5; // var를 사용하면 전역 객체가 되버린다. => 권하지 않음
// js 엔진이 window 객체 내부적으로 이미 여러 프로퍼티를 생성한다. 이름이 충돌할 수 있어서 사용 안함.
// 안내 책에 var 있으면 그 책은 버려ㅎㅎ
alert(window.gVar); // 윈도우 단위의 객체, 출력 : 5

// 그럼 어떻게 static 효과를 줄 수 있을까? -> 아래의 형태로 쓰자.
// var를 사용하지 않고 중요한 변수여서 모든 함수가 접근 가능한 변수를 선언하고 싶은 경우
window.currentUser = {
    name : "John" 
};

let currentUser = "Peter";

alert(currentUser); // Peter // 엔진은 동일한 이름이 있을 때(currentUser) 가까운 것을 가져온다. 그래서 출력이 Peter
alert(window.currentUser.name); // 윈도우 단위의 객체, 출력 : John

