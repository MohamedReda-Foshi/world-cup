gsap.registerPlugin(ScrollTrigger);

const texts = document.querySelectorAll('#textDiv');

for (let i = 0; i < texts.length; i++) {
    gsap.fromTo(texts[i],
        {  opacity: 0 },
        { 
            opacity: 1, 
            duration: 1.5, 
            scrollTrigger: {trigger: texts[i],
                start: 'top center',
            }
            
        }
        );
    }
    // animation img
    const imager = document.querySelectorAll('#img');
    for (let i = 0; i < imager.length; i++) {
    gsap.fromTo(
        imager[i],
      { y:80,opacity: 0 },
      { 
        y: 0,
        opacity: 1, 
        duration: 0.8, 
        scrollTrigger: {
        trigger: imager[i],
        start: 'top center',
        },
        
      }
    );
  }







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

type="text/javascript">
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}


//dark mode


function switchDarkMode() {
    const background = document.querySelector("body");
    const text = document.querySelectorAll(".text");
    const nav = document.getElementById("header");
    const button = document.querySelector("button");
    const back_ground = document.querySelector("#border");

    let darkMode = false;
    if (darkMode == false) {
        darkMode = true;
        background.style.backgroundColor = "black";
        nav.style.background = "black";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "white";
            document.querySelector(".header").style.color = "white";
            document.querySelector("#border").style.color = "white";

        }
    } else {
        darkMode = false;
        background.style.backgroundColor = "rgb(225, 225, 225)";
        nav.style.background = "rgb(225, 225, 225)";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "black";
            document.querySelector(".header").style.color = "gray";
            document.querySelector("#border").style.color = "black";
        }
    }
}



