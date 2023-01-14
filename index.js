window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.add('header__burger-menu-is-active')
    })
    document.querySelector('#burger-x').addEventListener('click', function() {
        document.querySelector('#menu').classList.remove('header__burger-menu-is-active')
    })

    // SLIDER

        const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });    
})