"use strict"

let who = {   // 객체 생성
    name : "mirim",
    age : 18,
    nice_programmer : "yes"
};

who.subject = "javascript";

delete who.nice_programmer;  // niceprogrammer 값 삭제

alert(who.nice_programmer); 
// 그냥 객체 값 찍을 때는 [] 사용 안함 !!
// undefined 값이 나온다 (존재하지 않음)
alert(who.name); 
alert(who.age); 
