// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.querySelector('.slider');
//     const images = document.querySelectorAll('.slider img');
//     let currentIndex = 0;

//     function showImage(index) {
//         images.forEach((image, i) => {
//             if (i === index) {
//                 image.style.display = 'block';
//             } else {
//                 image.style.display = 'none';
//             }
//         });
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % images.length;
//         showImage(currentIndex);
//     }

//     // Set the interval for automatic sliding (change the value as needed)
//     const intervalId = setInterval(nextSlide, 3000);

//     // Stop the automatic sliding when the mouse is over the slider
//     slider.addEventListener('mouseover', function () {
//         clearInterval(intervalId);
//     });

//     // Resume automatic sliding when the mouse leaves the slider
//     slider.addEventListener('mouseout', function () {
//         intervalId = setInterval(nextSlide, 3000);
//     });

//     // Initial display
//     showImage(currentIndex);
// });





  

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000, // 5 seconds delay between slides
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});


  
  



