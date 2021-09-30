"use strict"

function a(one, two){

    return one+two;
};

console.log(a(40,));

function b(from, text = "안녕하세요!"){
     console.log(from+" : "+text);
}
b("민정");

function c(count){
     console.log(count ?? "unknown");
}
c();
