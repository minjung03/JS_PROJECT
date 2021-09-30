"use strict"

let arr = [5,2,4,-9,34];

function compareD(a,b){

    if(b>a) return 1;
    if(b==a) return 0;
    if(b<a) return -1;

}
arr.sort(compareD);
console.log(arr);
