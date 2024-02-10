"use strict";
let btnPlay = document.querySelector(".button-play");
let btnPause = document.querySelector(".button-pause");
let btnStop = document.querySelector(".button-stop");
let btnCancel = document.querySelector(".button-cancel");
let btnArchiwum = document.querySelector(".button-archiwum");
let pMain = document.querySelector(".p-main");
let pSecond = document.querySelector(".p-second");
let archiwumList = document.querySelector(".timer-archiwum-list");
let timeArray = [];
let minutes = 0;
let seconds = 0;
let time;

const fPlay = () => {
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

const fPause = () => {
    clearInterval(time);
}

const fStop = () => {
    
    pSecond.innerHTML = `Twój ostatni czas: ${pMain.textContent}`
    if(pMain.textContent !== "0.00") {
        pSecond.style.visibility = "visible"
        timeArray.push(pMain.textContent);
    }
    clearInterval(time)
    pMain.textContent = "0.00";
    minutes = 0;
    seconds = 0;
};

const fCancel = () => {
    timeArray = [];
    archiwumList.textContent = "";
};

const fArchwiwum = () => {
    timeArray.forEach(time => {
        let li = document.createElement("li");
        li.textContent = time;
        archiwumList.appendChild(li);

    })
};

btnPlay.addEventListener("click", fPlay);
btnPause.addEventListener("click", fPause);
btnStop.addEventListener("click", fStop);
btnCancel.addEventListener("click", fCancel);
btnArchiwum.addEventListener("click", fArchwiwum);
