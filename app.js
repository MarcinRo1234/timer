"use strict";
let btnPlay = document.querySelector(".button-play");
let btnPause = document.querySelector(".button-pause");
let btnStop = document.querySelector(".button-stop");
let btnCancel = document.querySelector(".button-cancel");
let btnArchiwum = document.querySelector(".button-archiwum");
let btnOption = document.querySelector(".timer-option .fa-question");
let pMain = document.querySelector(".p-main");
let pSecond = document.querySelector(".p-second");
let archiwum = document.querySelector(".timer-archiwum")
let archiwumList = document.querySelector(".timer-archiwum-list");
let timerModal = document.querySelector(".timer-modal");
let btnClose = document.querySelector(".close");
let timerModalHero = document.querySelector(".timer-modal-hero");
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
    
    
    
    if(pMain.textContent !== "0.00") {
        pSecond.style.visibility = "visible"
        timeArray.push(pMain.textContent);
        timeArray.forEach(time => {
            let li = document.createElement("li");
            li.innerHTML = `Twój wynik:   <span>${time}</span>`;
            archiwumList.appendChild(li);
            pSecond.innerHTML = `Twój ostatni czas: ${pMain.textContent}`
            
        });
        
        timeArray = [];
    } else {
        
    }
    
    clearInterval(time)
    pMain.textContent = "0.00";
    minutes = 0;
    seconds = 0;
};

const fCancel = () => {
    timeArray = [];
    archiwumList.textContent = "";
    archiwum.style.display = "none";
    pSecond.style.visibility = "hidden";
};

const fArchwiwum = () => {
    archiwum.style.display= "flex";   
}
const fOption = () => {
    timerModal.style.visibility = "visible";
    timerModalHero.style.visibility = "visible";

    
}
const fClose = () => {
    timerModal.style.visibility = "hidden";
    timerModalHero.style.visibility = "hidden";
}

btnPlay.addEventListener("click", fPlay);
btnPause.addEventListener("click", fPause);
btnStop.addEventListener("click", fStop);
btnCancel.addEventListener("click", fCancel);
btnArchiwum.addEventListener("click", fArchwiwum);
btnOption.addEventListener("click", fOption);
btnClose.addEventListener("click", fClose);

// DO wymyślenia kwestia co jeśli użytkownik kliknie archiwum zanim użyje timera
// 
