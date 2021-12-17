"use strict"

// setTimeout 방법

function fromto(from, to){
    setTimeout(function go() {

        console.log(from);
        from++;
        if(from < to) clearTimeout();

    }, 1000);
}
fromto(1,10);
