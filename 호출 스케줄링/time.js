"use strict"; 
setInterval(function(){
    const today = new Date();
    const dayNames = [ '일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let day = dayNames[today.getDay()];
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    const ampm = hour>=12 ? "PM" :"AM";

    hour %= 12; //12시간제로 
    hour = hour || 12; //hour 가 0이면 12를 재할당 
    minute = minute <10? '0' + minute : minute;  //두자리 숫자로 통일 
    second = second <10? '0' + second : second; 
   const now = `${year}년 ${month}월  ${date}일 ${hour}:${minute}:${second}${ampm}`;
    console.log(now);
}, 1000);