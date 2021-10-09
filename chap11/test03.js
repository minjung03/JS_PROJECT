"use strict"

function Counter(){
    let count = 0;

    this.up = function(){
        return ++count; // 전위
    }
    this.down = function(){
        return --count;
    }
}

// 렉시컬 환경이 하나라 count를 공유한다. 
let counter = new Counter();

console.log( counter.up() );
console.log( counter.up() );
console.log( counter.down() );
