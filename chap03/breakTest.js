"use strict"

let num, sum=0;

while(true){

    num = prompt("숫자를 입력해주세요");

    if(!num){  // 입력이 없다(취소를 누르거나) 조건 체크 !(변수) , num == "" 도 가능?
        break;
    }
    else{
        sum += Number(num);
    }
   
}
alert("입력한 수들의 누적합은 "+sum);


