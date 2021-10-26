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
  