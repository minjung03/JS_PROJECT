"use strict";

let x = 'xxx';

function test(){
    let y = 'yyy';

    function bar(){
        let z = 'zzz';
        alert(x+y+z);
    }
    bar();
}
test();
// 실행 시 두개의 실행 컨텍스트를 생성
// 완벽히 알고 있어야 한다!!