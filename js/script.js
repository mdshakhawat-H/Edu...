
// ================ NAV PART START ===============
let menufixed = document.querySelector('nav')
window.addEventListener("scroll", function(){
this.window.scrollY
console.log(this.window.scrollY);
   let scrolling = window.scrollY

   if(scrolling > 150){
       menufixed.classList.add('menufixed')
    }
    else{
       menufixed.classList.remove('menufixed')
   }
})
// ================ NAV PART ENDED ===============
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
// ================ RECENT PART START ===============
$('.recent_slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: '<i class="fa-solid fa-caret-left slick_left"></i>',
    nextArrow: '<i class="fa-solid fa-caret-right slick_right"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// ================ RECENT PART ENDED ===============
// ================ FACULTIES PART START ===============
$('.faculties').slick({
  // autoplay: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ================ FACULTIES PART ENDED ===============
// ================ ADMISSION FORM PART START ===============
const image = document.querySelector(".stu_pic")
      input = document.querySelector(".stu_file")
  input.addEventListener("change" , ()=>{
    image.src = URL.createObjectURL(input.files[0]);
  });
// ================ ADMISSION FORM PART ENDED ===============



