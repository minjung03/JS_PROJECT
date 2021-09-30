"use strict"

// 상품명과 가격이 들어있는 객체가 담긴 배열 item 이 있다. 상품의 가격만을 갖는 새로운 배열 purchase를 생성하는 프로그램을 작성하라

// 객체 선언
let n =  { name:"notebook", price : 1000 };
let p = { name:"pencil", price : 500 };
let e = { name:"eraser", price : 1500 };

let item = [ n,p,e ];

// map() 메서드는 배열 내의 각각 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환.
/* let purchase = function(item, index, array){
    return item.price;
};
console.log(itme.map(purchase)); */

let purchas = item.map(item => item.price);
console.log(purchas);

let sum = 0;
purchase.forEach((price) => { 
    sum += price;
});
console.log(sum);  


