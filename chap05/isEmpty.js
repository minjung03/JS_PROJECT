"use strict"
// 객체가 비어있는지 확인 후 비어있으면 true, 
// 비어있지 않으면 false를 반환하는 프로그램

function isEmpty(obj){

    for(let key in obj){
        return false;  // 객체가 비어있지 않은 경우
    }
    return true;  // 객체가 비어있는 경우
    
};

let student = {};
student["나미림"] = 2120;
student["고미림"] = 2121;

console.log(isEmpty(student));