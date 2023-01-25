odoo.define("theme_coffee_shop.theme_coffee_shop_template", function (require) {
  "use strict";
  var ajax = require('web.ajax');

const navicon = document.getElementById('nav-icon');
const navitem = document.getElementById('nav-item');

if(navicon){
    navicon.addEventListener("click",function(e){
      e.preventDefault();
        navitem.classList.toggle('active');
    })
    }




    function functionLike(r) {
      r.classList.toggle("fa-solid");
    }


//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
//var dropdown = document.getElementsByClassName("dropdown-btn");
//var i;
//
//
//for (i = 0; i < dropdown.length; i++) {
//  dropdown[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var dropdownContent = this.nextElementSibling;
//    if (dropdownContent.style.display === "block") {
//      dropdownContent.style.display = "none";
//
//
//    } else {
//      dropdownContent.style.display = "block";
//
//    }
//  });
//}







function fliterclick() {
  var x = document.querySelector(".pr-categories");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const loginPage=document.querySelectorAll("#login-btn");

loginPage.forEach(login=>{
  login.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.login-form-container').classList.toggle('show');
  })
})

document.querySelector(".login-close").onclick=()=>{
  document.querySelector('.login-form-container').classList.toggle('show');
}
const cartIconEl = document.querySelectorAll(".cart-icon");

cartIconEl.forEach(cartIcon => {
  cartIcon.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.shopping-cart').classList.toggle('showcart');
  })
})


document.querySelector(".cartremove").onclick=()=>{
  document.querySelector('.shopping-cart').classList.toggle('showcart');
}


//testimonial slider................
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}

//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("dot");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//  }
//
//  slides[slideIndex-1].style.display = "block";
//
//}
});