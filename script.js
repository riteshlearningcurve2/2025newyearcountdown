const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const currentyear = new Date().getFullYear();

const newyeartime = new Date(currentyear + 1, 0, 1);

function updateCountDown()
{
    const currenttime= new Date();
    const diff = newyeartime-currenttime
    const d  = Math.floor(diff/1000/60/60/24);
    const h  = Math.floor(diff/1000/60/60)%24;
    const m  = Math.floor(diff/1000/60)%60;
    const s  = Math.floor(diff/1000)%60;
    days.textContent = d
    hours.textContent = h
    minutes.textContent = m
    seconds.textContent = s
}


setInterval(updateCountDown,1000)