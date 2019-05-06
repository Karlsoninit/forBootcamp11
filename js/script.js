'use strict'


const stop = document.querySelector('.stop'),
        start = document.querySelector('.start'),
        count = document.querySelector('.time');
       


let i = 1;

const time = () => {
    count.textContent++;
}





let newTime;
start.onclick = function() {

    
    newTime = setInterval(time, 1000)
    // start.disabled = true;
    start.textContent = 'Stop';
    start.className = 'stop';
    if(start.className === 'stop') {
        start.style.color = 'red'
    }
    // stop.style.color = 'red';

    start.onclick = function() {
        if(start.textContent === 'Stop') {
            clearInterval(newTime)
            start.style.color = 'blue'
            start.textContent = 'Start';
        }

    }
}

// stop.onclick = function() {
//    clearInterval(newTime)
//    i = 1;
//    start.disabled = false;
// }



// const now = new Date();

// if(now.setSeconds(now.getSeconds() + 70)) {
//     alert('win')
// }

// console.log(now)


// function showDate() {
//     const now = new Date();
//     console.log(now)
// }

// const show  = setInterval(showDate, 3000);

// console.log(show)



let q = 0;
function tab(e) {
    console.log(e.keyCode)
    console.log(e.screenX)
    if(e.keyCode === 70) {
        console.log(`нажали ${q++}`)
    }
}

window.addEventListener('click', tab);


const line = document.querySelector('.line');
let w = 0;


function plus(p) {
        setInterval(function(){
        w ++
        // line.innerHTML =  `<div style=" width: ${w + 'px'}, height: 20px, color: red"></div>`
        line.style.width = `${w + 'px'}`
           

    },500)
}

function p(...rest) {
    return rest.reduce((acc, el ) => acc + el, 0)
}

// plus( p)