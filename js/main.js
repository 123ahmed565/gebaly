// swiper slider for departments
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
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
        slidesPerView: 4,
        spaceBetween: 20
      },
        
    }
  });




  // navtabs why choose us
  

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