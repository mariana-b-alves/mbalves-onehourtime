let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let myTimer;
let myCounter = 0;
let mySeconds = 0;
let myMinutes = 0; 

stopBtn.disabled = true;
resetBtn.disabled = true;

startBtn.addEventListener("click", function(){

    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;

    myTimer = setInterval(function (){
        myCounter++;
        mySeconds = myCounter;

        seconds.innerHTML = mySeconds;
        
        //Start counting seconds
        if(mySeconds > 59) {
            seconds.innerHTML = "00";
            myCounter = 0;
            myMinutes++;

        } else if(mySeconds > 9){
            seconds.innerHTML = mySeconds;

        } else {
            seconds.innerHTML = "0" + mySeconds;
         }

         //Start counting minutes
         if(myMinutes > 59) {
            seconds.innerHTML = "00";
            minutes.innerHTML = "00";
            myCounter = 0;
            mySeconds = 0;
            myMinutes = 0;
            clearInterval(myTimer);

        } else if(myMinutes > 9){
            minutes.innerHTML = myMinutes;

        } else {
            minutes.innerHTML = "0" + myMinutes;
         }

    },1000);
});

stopBtn.addEventListener("click", function(){
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(myTimer);
});

resetBtn.addEventListener("click", function(){

    startBtn.disabled = false;
    resetBtn.disabled = true;
    stopBtn.disabled = true;

    clearInterval(myTimer);
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    myCounter = 0;
    mySeconds = 0;
    myMinutes = 0;
});