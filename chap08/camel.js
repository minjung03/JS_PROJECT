"use strict"

let str = "my-short-string";

function camel(str){

    let arr = str.split("-");// 배열로 쪼개기 
    //map함수의 매개변수 순서는 달라도 관계없다. 
    //slice(1)는 두번째부터 배열요소를 리턴 
    arr = arr.map((arr, index) => index === 0 ? arr : arr[0].toUpperCase() + arr.slice(1));
    let result = arr.join(""); //배열을 문자열로 바꾸기  // 공백을 기준으로 합치기, 간격주면 안됨!
    return result;

    // return str.split("-").map((arr, index) => index === 0 ? arr : arr[0].toUpperCase() + arr.slice(1)).join("");
    // 이런식의 호출 체이닝 방법으로도 많이 쓴다.
};


console.log(camel(str));

