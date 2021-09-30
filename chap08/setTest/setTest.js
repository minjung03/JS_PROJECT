"use strict"

function unique(arr){
    return Array.from(new Set(arr));
    // 매개변수로 받은 arr(values)을 사용해 Set(중복 제거)을 만들어 Array로 리턴
}// 중복 제거시에 활용하면 좋다.

let values = ["Hare","Krishna","Hare","Krishna","Krishna", "Krishna","Hare",":-O"];

console.log(unique(values));