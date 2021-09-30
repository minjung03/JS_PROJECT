"use strict"

let str = "Where there is a will there is a way";
let index = 0;

// 문자열에서 "er"을 모두 검색하는 예제를 작성하시오
while(1){

    let er = str.indexOf("er",index);
    if(er == -1) break;
    console.log(er);
    index = er+1;

}
