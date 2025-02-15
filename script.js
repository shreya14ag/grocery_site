let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () => {
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



var swiper = new Swiper(".products-slider", {
  loop: true, // Use a comma instead of a semicolon
  spaceBetween: 20,

  autoplay: {
      delay: 7500,
      disableOnInteraction: false, // Use a comma instead of a semicolon
  },

  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1020: {
          slidesPerView: 3,
      },
  },
});



var swiper = new Swiper(".review-slider", {
    loop: true, // Use a comma instead of a semicolon
    spaceBetween: 20,
  
    autoplay: {
        delay: 7500,
        disableOnInteraction: false, // Use a comma instead of a semicolon
    },
  
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
  });
  