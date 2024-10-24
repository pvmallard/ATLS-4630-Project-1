import { gsap } from "gsap/dist/gsap";
    
import { CustomEase } from "gsap/dist/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/dist/EasePack";
    
import { Flip } from "gsap/dist/Flip";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Draggable } from "gsap/dist/Draggable";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { EaselPlugin } from "gsap/dist/EaselPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

console.log(gsap);

let content = document.getElementById("container");
gsap.fromTo(content, {x: -100, opacity: 0},
  {x: 0, opacity: 1, duration: 1})

document.documentElement.clientWidth;
document.documentElement.clientHeight;

let first = document.getElementById("first-name");
let last = document.getElementById("last-name");
// const nameArray = nameTitle.textContent.split("");
// first.textContent = " ";
// last.textContent = " ";

const designTerms = ["", "Game", "UI/UX", "Web", "Graphic", "Sound"]

gsap.fromTo(first, 
    {x: -100, opacity: 0},
    {x: +100,
      duration: 2.7, 
      stagger: 0.2,
      ease: "back.out",
      text: {
        value: "MALLORY",
        delimiter: "",
        speed: 0.2,
        opacity: 1,
      },
      opacity:1
    })

  gsap.fromTo(last, 
    {x: +100, opacity: 0},
    {x: -100, opacity: 1, 
      duration: 2.7, 
      stagger: 0.2,
      ease: "back.out",
      text: {
        value: "PRESCOTT",
        delimiter: "",
        speed: 0.2
      }
    })
  
let overlay = document.getElementById("overlay");
let navButton = document.getElementById("nav-btn");
navButton.addEventListener('click', openNav);
let closeNavButton = document.getElementById("close-nav-btn");
closeNavButton.addEventListener('click', closeNav);
closeNavButton.style.visibility = "hidden";

function openNav(){
  console.log("open nav");
  overlay.style.height = "100%";
  closeNavButton.style.visibility = "visible";

  gsap.fromTo(".overlay-content", 
    {opacity:0},
    {
      opacity: 1
    })
}
function closeNav(){
  console.log("close nav");
  overlay.style.height = "0%";

  gsap.fromTo(".overlay-content", 
    {opacity:1},
    {opacity: 0})
  
    closeNavButton.style.visibility = "hidden";
}


// scroll trigger attempt
const targetElement = document.getElementById('software');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is in the viewport
      console.log('Element reached!');

      // Perform actions when the element is reached
      // ...
      gsap.fromTo(".svgBox", { 
        opacity: 0,
        x: +100
      },{ 
        opacity: 1,
        duration: 2,
        x: 0,
        ease: "bounce",
        stagger: 0.2
      });

      gsap.fromTo(".software", { 
        opacity: 0,
        x: -100
      },{ 
        opacity: 1,
        duration: 3,
        x: 0,
        ease: "back.out",
        stagger: 0.2
      });

      // Optionally, stop observing the element
      // observer.unobserve(targetElement);
    }
  });
});

observer.observe(targetElement);







