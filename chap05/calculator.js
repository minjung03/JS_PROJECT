"use strict"

// 수행 : 요거보다는 살짝 어려운 정도
let calculator = {

    read() {
        this.n1 = +prompt("숫자1 입력 : ");
        this.n2 = +prompt("숫자2 입력 : ");
    },
    sum(){
        return this.n1+this.n2;
    },
    mul(){
        return this.n1*this.n2;
    }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
