"use strict";
let btnPlay = document.querySelector(".button-play");
let btnPause = document.querySelector(".button-pause");
let btnStop = document.querySelector(".button-stop");
let btnCancel = document.querySelector(".button-cancel");
let btnArchiwum = document.querySelector(".button-archiwum");
let pMain = document.querySelector(".p-main");
let pSecond = document.querySelector(".p-second");
let minutes = 0;
let seconds = 0;
let time;

const functionPlay = () => {
    clearInterval(time);
    time = setInterval(() => {
        seconds++
        if(seconds < 9){
            pMain.textContent = `${minutes}:0${seconds}`;}
        else if( seconds >= 9 && seconds < 59){
            pMain.textContent = `${minutes}:${seconds}`
        }
        else if(seconds > 59) {
            minutes++;
            seconds = 0;
            pMain.textContent = `${minutes}:0${seconds}`;
            
        }
    }, 100)
};

const functionPause = () => {
    clearInterval(time);
}
btnPlay.addEventListener("click", functionPlay);
btnPause.addEventListener("click", functionPause);
