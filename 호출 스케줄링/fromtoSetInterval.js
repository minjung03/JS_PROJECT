"use strict"

// setInterval 방법
function fromto(from, to){
    let timerId = setInterval(() => {

        console.log(from);
        from++;
        if(from > to) clearInterval(timerId);

    }, 1000);
}
fromto(1,10);