"use strict"

// 배열 요소에 대해서 반복하는 콜백 함수 (forEach와 비슷하지만 결과가 배열로 반환된다는 차이점이 있다.)
let arr_length = ["aaa","bbbbb","cccccc"];
 
let fn = function(item, index, array){
    return item.length;
};

console.log(arr_length.map(fn));