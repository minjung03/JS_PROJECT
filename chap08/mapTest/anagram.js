"use strict"

// 애너그램 :  abc cba bca 는 전부 같은 글자로 보고 걸러내는 것!

let arr = ["nap","teachers","cheaters","PAN","ear","era","hectares"];

console.log(aclean(arr));

function aclean(arr){
    let map = new Map();
    for(let item of arr){ //item은 배열의 원래 값
        let sorted = item 
                        .toLowerCase() //pan 소문자로 만들기
                        .split('') //[p.a.n] 쪼개기
                        .sort() // ['a','n','p'] 정렬하기
                        .join(''); // sorted는 하나의 형식으로 정리된 값 / 다시 하나의 단어로 붙이기
        map.set(sorted, item); // map은 동일한 키가 있는 경우 덮어쓰게 된다. (키가 유일하다는 점을 사용해 문제 해결)
     }
    return Array.from(map.values());
    // 이런형태로 많이 보게 될 것이다.
}