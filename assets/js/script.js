//swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
      },
  });

  //tooltip
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




const scrollFunction = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.backgroundColor = "white"; // Cambiar a rojo cuando haces scroll más de 200px
  } else {
    document.getElementById("navbar").style.backgroundColor = "#F3EEF6"; // Mantener azul si estás por debajo de 200px de scroll
  }
}
window.onscroll = () => scrollFunction();