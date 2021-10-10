"use strict";

let list = {value : 1};
list.next = {value : 2};
list.next.next = {value : 3};
list.next.next.next = {value : 4};
list.next.next.next.next = null;

// 이 정도는 간단하게 작성할 줄 알아야한다.
function reList(list){

    // 가장 단순화한 값을 출력
    console.log(list.value);

    // 나머지 요소를 출력
    if(list.next){ // 다음 값이 존재하면
        reList(list.next); // next 값을 보내면서 재귀호출
    }
}
reList(list);

