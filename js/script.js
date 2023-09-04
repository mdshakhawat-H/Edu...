// ================ BANNER PART START ===============
'use strict';

const type = document.querySelector('.type-text');

let listTexts = ['Divine School , Jadurchar'];

let index = -1;
let current = 0;

function typeTextFunc() {
    if (current === listTexts.length) {
        current = 0;
    }
    let typeText = setInterval(() => {
        if (index == listTexts[current].length - 1) {
            clearInterval(typeText);
            clearTextFunc();
        } else {
            index++;
            type.textContent += listTexts[current][index];
        }
    }, 150);
};

function clearTextFunc() {
    let clearText = setInterval(() => {
        if (type.textContent.length == 0) {
            clearInterval(clearText);
            index = -1;
            current++
            typeTextFunc();
        } else {
            type.textContent = type.textContent.slice(0, -1)
        }
    }, 150);
};
typeTextFunc();
// ================ BANNER PART ENDED ===============

// ================ WELCOME PART START ===============
//counterUp
let counter = document.querySelectorAll(".count");
let arr = Array.from(counter);

arr.map((item)=>{
    let count = item.innerHTML;
    item.innerHTML = "";
    let countNumber = 0;
    function counterUp(){
        item.innerHTML = countNumber++;
        if(countNumber > count){
            clearInterval(stop);
        }
    }
    let stop = setInterval(()=>{
        counterUp();
    }, item.dataset.speed/count);     
})


// ================ WELCOME PART ENDED ===============