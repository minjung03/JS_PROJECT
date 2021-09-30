"use strict"; // 해석 : 모던 자바스크립트야

let sum =0 , odd = 0, even = 0;

for(let i = 1; i <= 50; i++){
    
    sum += i;

    if (i%2==0){
        even += i;
    }
    else {
        odd += i;
    }
};  // 문단,문장 끝에 ; 넣어주기

// 답이 맞게 나오는지 테스트!
// alert(sum);
// alert(odd);
// alert(even);

document.getElementById("sum").value = sum;
document.getElementById("odd").value = odd;  
document.getElementById("even").value = even;
/* html과 연결된 js문서에 even이라는 변수가 있으면 
거기에 대해서 value값을 지정해! => js 값을 html 요소에 저장(?) */