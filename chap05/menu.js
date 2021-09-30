"use strict"
// 수행평가에 가장 근접한 문제 형태(4-5개 정도 푼다)
// 값이 숫자인 경우에만 2배를 곱해 출력하는 함수

let menu = {

    hamburger : 5000,
    potato : 1000,
    cola : 1000,
};

menu.option = "선택";

multiply(menu);

function multiply(menu){

    for(let key in menu){

        if(typeof menu[key] == "number"){
            menu[key] *= 2;
        }            
    }
}

function printMenu(menu){
    
    console.log("메뉴 출력");
    for(let item in menu){

        console.log(item+" : "+menu[item]);
    }
}
printMenu(menu);


