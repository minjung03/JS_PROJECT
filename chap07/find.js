"use strict"

let employee = [  // 배열

    {id : 1, name : "홍길동"}, // 배열의 요소가 객체
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
console.log(employee.find(fn));


// 함수 화살표 방식
let result = employee.find((item, index, array) => item.name == "신림동");
// item, index, array는 find를 호출한 객체(rmployee)한테서 얻어온다.
// js는 순서만 맞추면 된다.
// find() 안에 아무것도 안쓰는 거는 안됨. 1~3개가 있어야 한다. (몇개 없어도 오류는 안남, 단 1개 이상은 무조건 있어야한다!)

/*
item  {id : 1, name : "홍길동"}
index 0,1,2,3..
list(array) employee 배열 전체, 이름 아무렇게나 주어도 ok
*/

console.log(result);




