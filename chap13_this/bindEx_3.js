"use strict"

function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  alert( bound.test ); 
  // bind를 적용하면 또 다른 객체가 반환됩니다.
  // 새로운 객체엔 test 프로퍼티가 없으므로 undefined가 출력됩니다.