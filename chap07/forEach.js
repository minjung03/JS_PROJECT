"use strict"

let list = ["A","B","C"];

//함수 표현식
let fn = function(item, index, array) {
    console.log(item+":"+ index+":"+array);
}
list.forEach(fn);
// 저 리스트에 대해서 각각의 함수를 실행시켜라


// 화살표 함수(이 방법으로 더 많이 쓴다**)
// forEach "매개변수"에 화살표 함수가 들어간다**
list.forEach((item, index, array) => { 
    console.log(item+":"+ index+":"+array);
});  