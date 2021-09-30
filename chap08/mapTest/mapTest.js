"use strict"

let recipeMap = new Map([
    ['cucumber',500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// map도 for of 지원!
// keys() values() entries()는 js가 지원하는 것**

// recipeMap의 key 값을 vegetable 변수로 가지고 오는 것!
for(let vegetable of recipeMap.keys()){ 
    console.log(vegetable);
}

// recipeMap의 value 값을 price 변수로 가지고 오는 것!
for(let price of recipeMap.values()){ 
    console.log(price);
}

// key 와 value 전부 출력하기
for(let entry of recipeMap.entries()){ 
    console.log(entry);
}

// 꼭 for문이 아니어도 괜찮다.
recipeMap.forEach((value,key, map)=>{
    console.log(`${key} : ${value}`);
})

