

// animation text

gsap.registerPlugin(ScrollTrigger);





//const text = document.querySelectorAll('.text_1');
//const text = document.querySelectorAll('.text_1');

const text = document.querySelectorAll('.text_1');
for (let i = 0; i < text.length; i++) {
  gsap.fromTo(text[i],
    {  opacity: 0 },
    { 
      opacity: 1, 
      duration: 1.5, 
      scrollTrigger: {trigger: text[i],
        start: 'top center',
      }
      
    }
    );
  }
  
  
  // animation img
  const img = document.querySelectorAll('#img_1');
  for (let i = 0; i < img.length; i++) {
    gsap.fromTo(
      img[i],
      { y: 80, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: img[i],
          start: 'top center',
        },
        
      }
      );
      
    }
    
    const palayer = document.querySelectorAll('#palayer');
    
    for (let i = 0; i < palayer.length; i++) {
      gsap.fromTo(
        palayer[i],
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: palayer[i],
            start: 'top center',
          },
          
        }
        );
        
      }
      
      const palce = document.querySelectorAll('#palce');

      for (let i = 0; i < palce.length; i++) {
      gsap.fromTo(
        palce[i],
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: palce[i],
            start: 'top center',
          },
          
        }
        );
        
      }
      document.images[5].scr="image/peakpx(1).jpg ";
      
      
      const cont = document.querySelectorAll('.cont');
      
      for (let i = 0; i < cont.length; i++) {
        gsap.fromTo(
          cont[i],
          { y: 80, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: cont[i],
          start: 'top center',
        },
   
      }
    );
  
  }















//scorl 
const header = document.querySelector('header');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition < lastScrollPosition) {
        header.classList.add('header-shadow');
    } else {
        header.classList.remove('header-shadow');
    }
    
    lastScrollPosition = currentScrollPosition;
});
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            // Scrolling up
            document.getElementById("app").classList.remove("hide");
        } else {
            // Scrolling down
            document.getElementById("app").classList.add("hide");
        }
        prevScrollPos = currentScrollPos;
    }

//slide show
var slideIndex = 1; /* changed to start at 1 */
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = "100%"; /* added to reset position */
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.left = "0"; /* added for animation */
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




//dark mode


function switchDarkMode() {
    const background = document.querySelector("body");
    const text = document.querySelectorAll(".text");
    const nav = document.getElementById("header");
    const button = document.querySelector("button");
    const border = document.querySelector("#border");
    
    let darkMode = false;
    if (darkMode == false) {
      darkMode = true;
      background.style.backgroundColor = "black";
      nav.style.background = "black";
      
      for (let i = 0; i < text.length; i++) {
        text[i].style.color = "white";
        nav.style.color = "white";
          border.style.color = "red";



        }
    } else {
        darkMode = false;
        background.style.backgroundColor = "rgb(225, 225, 225)";
        nav.style.background = "rgb(225, 225, 225)";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "black";
            document.querySelector(".header").style.color = "gray";
        }
    }
}















