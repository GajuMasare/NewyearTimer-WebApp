const dafultDate = "1 jan 2023";
const daysEl = document.getElementById ("days");
const hoursEl = document.getElementById ("hours");
const minEl = document.getElementById ("min");
const secEl = document.getElementById ("sec");

function countdown(){
    const NewYearsDate= new Date(dafultDate);
    const currentDate= new Date ();

    const totalseconds = (NewYearsDate - currentDate) / 1000;
    const days= Math.floor(totalseconds / 3600 / 24);
    const hours= Math.floor(totalseconds / 3600) % 24;
    const minutes= Math.floor(totalseconds / 60) % 60;
    const seconds= Math.floor(totalseconds) %60;

    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minEl.innerHTML=formatTime(minutes);
    secEl.innerHTML=formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);