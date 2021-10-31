// preloader
window.onload = function () {
  //hide the preloader
  document.querySelector('.loader_bg').style.display = "none";
};

// to top
const scrollBtn= document.querySelector(".scroll-to-top");
const upperbar =document.querySelector('.upperbar');

scrollBtn.addEventListener("click",()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});

document.addEventListener("scroll",(e)=>{
if(document.documentElement.scrollTop <=100){
  scrollBtn.style.display="none";
}else
{
  scrollBtn.style.display="block";
}
});

// swiper slider for departments
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
    spaceBetween: 20,
    freeMode: true,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0: {
        slidesPerView: 2.5,
        spaceBetween: 15
    
      },
      600: {
        slidesPerView: 3.5,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 4.5,
        spaceBetween: 20
      },
        
    }
  });
  

  // testimonials
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    grabCursor:true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// brands
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 6.5,
    spaceBetween: 30,
    freeMode: true,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0: {
        slidesPerView: 3.5,
        spaceBetween: 15
    
      },
      600: {
        slidesPerView: 4.5,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 6.5,
        spaceBetween: 20
      },
        
    }
  });



// nav tab vertically about us
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// statistics laod number when scroll
const counters = document.querySelectorAll('.counter');
window.addEventListener('scroll',()=>{
  counters.forEach(counter => {
    counter.innerText = '0';
    
    const updateCounter = ()=>{
      const target=counter.getAttribute('data-target');
      const c = +counter.innerText;
    
      const increment =  target /500;
      if(c <target){
        counter.innerText=  `${Math.ceil(c+increment)}`;
        setTimeout(updateCounter, 1);
      }else{
        counter.innerText=target;
      }
    } ;
    updateCounter();
    });
})