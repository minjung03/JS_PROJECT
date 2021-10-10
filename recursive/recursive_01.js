"use strict";

// 이 형태는 외워두기 (대표적)
function pow(x, n){
    if(n==1){
        return x;
    }
    else {
        // 작업을 단순화 하면서 자기 자신을 호출
        return x * pow(x, n-1);
    }
}
console.log( pow(2,3) );