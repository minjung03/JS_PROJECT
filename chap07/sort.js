"use strict"

let arr = [2,4,56,1,11,34];
arr.sort();
console.log(arr);
// sort는 문자열을 기준으로 정렬한다**

let arr2 = [2,4,56,1,11,34];

function compareN_A(a,b){ // ** "숫자"의 오름차순 정렬** 기억해두자

    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}


function compareN_D(a,b){ // ** "숫자"의 내림차순 정렬** 기억해두자

    if(b > a) return 1;
    if(b == a) return 0;
    if(b < a) return -1;
}


function compareNumeric(a, b) {
       if (b > a) return 1;
       if (b ==a) return 0;
       if (b < a) return -1;
}

    
arr2.sort(compareN_A);
console.log(arr2);
arr2.sort(compareN_D);
console.log(arr2);