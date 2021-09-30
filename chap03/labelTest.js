"use strict"

let a;

outer : for(let i=0; i<2; i++){
    for(let j=0; j<2; j++){

        let input = prompt(`(${i}), (${j})의 값`,``);
        if(!input) break outer; // 중첩 for문일 경우, break가 안쪽 for문에게만 영향을 미친다
        //이 바깥쪽 for문도 끝내고 싶다 끝낼 for문과 break에 "outer" 적어주기!!
    }
    
}
alert("완료!");