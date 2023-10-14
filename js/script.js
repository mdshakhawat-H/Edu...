
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

let listTexts = ['Divine University'];

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
// ================  PROFILE PART START ===============
// complete module class start
console.clear();

let mdltxt = 0

let timer = setInterval(function() {
  mdltxt += 1
  $('.progress_text').text(`${mdltxt} %`)
  $('.bar').css('width', `${mdltxt}%`)
  
  if(mdltxt >= 98) {
    clearInterval(timer)
  }
}, 30)
// complete module class end
// total present class start
console.clear();

let prsnt = 0

let time = setInterval(function() {
  prsnt += 1
  $('.progress_present_txt').text(`${prsnt} %`)
  $('.bar_present').css('width', `${prsnt}%`)
  
  if(prsnt >= 80) {
    clearInterval(time)
  }
}, 30)
// total present class end
// total absent class start
console.clear();

let absnt = 0

let abtimer = setInterval(function() {
  absnt += 1
  $('.progress_absent_txt').text(`${absnt} %`)
  $('.bar_absent').css('width', `${absnt}%`)
  
  if(absnt >= 20) {
    clearInterval(abtimer)
  }
}, 30)
// total absent class end
// total assignment start
console.clear();

let asnmnt = 0

let asnmntime = setInterval(function() {
  asnmnt += 1
  $('.progress_assignment_txt').text(`${asnmnt} %`)
  $('.bar_assignment').css('width', `${asnmnt}%`)
  
  if(asnmnt >= 60) {
    clearInterval(asnmntime)
  }
}, 30)

// total assignment end

// setting part start
// old password start
$(document).ready(function() {
  $("#show_hide_password a").on('click', function(event) {
    event.preventDefault();
      if($('#show_hide_password input').attr("type") == "text"){
        $('#show_hide_password input').attr('type', 'password');
        $('#show_hide_password i').addClass( "fa-eye-slash" );
        $('#show_hide_password i').removeClass( "fa-eye" );
      }else if($('#show_hide_password input').attr("type") == "password"){
        $('#show_hide_password input').attr('type', 'text');
        $('#show_hide_password i').removeClass( "fa-eye-slash" );
        $('#show_hide_password i').addClass( "fa-eye" );
      }
    });
  });
  // old password end
// new password start
$(document).ready(function() {
  $("#show_hide_password_new a").on('click', function(event) {
    event.preventDefault();
    if($('#show_hide_password_new input').attr("type") == "text"){
      $('#show_hide_password_new input').attr('type', 'password');
          $('#show_hide_password_new i').addClass( "fa-eye-slash" );
          $('#show_hide_password_new i').removeClass( "fa-eye" );
      }else if($('#show_hide_password input').attr("type") == "password"){
          $('#show_hide_password_new input').attr('type', 'text');
          $('#show_hide_password_new i').removeClass( "fa-eye-slash" );
          $('#show_hide_password_new i').addClass( "fa-eye" );
      }
    });
  });
  // new password end
  // confirm password start
  $(document).ready(function() {
    $("#show_hide_password_confirm a").on('click', function(event) {
      event.preventDefault();
      if($('#show_hide_password_confirm input').attr("type") == "text"){
        $('#show_hide_password_confirm input').attr('type', 'password');
            $('#show_hide_password_confirm i').addClass( "fa-eye-slash" );
            $('#show_hide_password_confirm i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password_confirm input').attr('type', 'text');
            $('#show_hide_password_confirm i').removeClass( "fa-eye-slash" );
            $('#show_hide_password_confirm i').addClass( "fa-eye" );
        }
      });
    });
  // confirm password end
  // setting part end
// ================  PROFILE PART ENDED ===============

