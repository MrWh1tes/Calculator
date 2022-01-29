"use strict"

const screen = document.getElementById("screen");
const buttons_cont = document.getElementById("buttons_cont");
const button = document.getElementsByClassName("button");

function print(character){

    var character = event.target.textContent
    if(character.length>3){

    }else if(character=="="){
        screen.innerHTML=eval(screen.innerHTML)

    }else if(character=="c"){
        screen.innerHTML=""
        
    }else if(character=="%"){
        screen.innerHTML += "/100*"
        
    }else if(character==Number){
        screen.innerHTML += Number(character)

    }else if(character!=Number){
        screen.innerHTML += character
   
    }
};

buttons_cont.addEventListener('click', print);
