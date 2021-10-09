"use strict"

function askPassword(ok, fail){
    let password = prompt("비밀번호를 입력해주세요.");
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name : "John",

    loginOk(){
        alert(`${this.name}님이 로그인하였습니다.`);
    },

    loginFail(){
        alert(`${this.name}님이 로그인에 실패하였습니다.`);
    },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// user가 전달이 안되고 있다. 그러니 bind로 묶어주기
// bind를 사용해 대상 컨텍스트를 묶어주기
// 이런 예제 많이 나온다.