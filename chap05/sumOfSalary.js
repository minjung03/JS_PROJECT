"use strict"
// 직원들의 월급을 가지는 employee 객체가 있다. 
// 월급의 합을 구하는 프로그램을 작성하시오.

let sum = 0; // 합을 구할 변수
let employee = { // 월급을 갖는 객체 employee
    aaa : 150,
    bbb : 120,
    ccc : 180
};

for(let itme in employee){  // employee 객체의 모든 key값에 대하여
    
    sum += employee[itme];  // 합 구하기
    // property 키로 연산을 하는 경우, 대괄호 표기법([]) 사용!
}
console.log(sum);
