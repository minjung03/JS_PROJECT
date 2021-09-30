"use strict"

// node를 배울 때 어마한 체이닝을 만날거다.. 알아두기!!
let ladder = {
    step : 0,
    up(){
        this.step++;
        return this; // 끝나면 자기 자신(메소드)을 리턴해
        // 이 문장을 추가하면 메소드 체이닝이 가능하다.
    },
    down(){
        this.step--;
        return this;
    },
    showStep : function(){
        alert(this.step);
        return this;
    }
}

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1 출력

ladder.up().up().down().showStep(); // 1 출력