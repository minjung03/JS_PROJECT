"use strict"

let arr = [5,2,4,-9,34];
let arr2;

arr2 = arr.slice(); // 배열 카피**

function compareD(a,b){

    if(b>a) return 1;
    if(b==a) return 0;
    if(b<a) return -1;

}

arr2.sort(compareD);
console.log(arr2);