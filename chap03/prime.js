"use strict"

let num, cnt;

num = prompt("숫자를 입력하세요");

outer : for(let i = 2; i <= num; i++){

           cnt = 0;     

           for(let j = 2; j <= i; j++){
                 
                if(!num){
                    break outer;
                }

                if(i%j == 0){        
                    cnt++;
                }
           }
           if(cnt == 1){
              alert("2 ~ "+num+"까지의 수 중 소수는 "+i);
           }        

}
alert("종료합니다");
