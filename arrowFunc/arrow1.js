"use strict"

let group ={
    title : "1모둠",
    students : ["보라", "호진", "지민"],

    showList(){
        this.students.forEach(
            student => console.log(this.title+" : "+student) // this는 group를 의미
        );
    }
};

group.showList();