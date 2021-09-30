"use strict"

let employee = [

    {id : 1, name : "홍길동"}, // 배열의 요소가 객체가 되게끔
    {id : 2, name : "나미림"},
    {id : 3, name : "엄복동"},
    {id : 3, name : "신림동"}

];

// id 값으로 name을 검색

// 함수 표현방식
let fn = function(item, index, array){

    return item.id == 3;
}
// 콜백함수
console.log(employee.filter(fn));


// 함수 화살표 방식
let result = employee.filter((item, index,array) => item.id == 3);

console.log(result);