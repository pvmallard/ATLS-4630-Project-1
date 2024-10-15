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

console.log(gsap);

let content = document.getElementById("container");
gsap.fromTo(content, {opacity: 0},
  {opacity: 1, duration: 2})

let first = document.getElementById("first-name");
let last = document.getElementById("last-name");
// const nameArray = nameTitle.textContent.split("");
first.textContent = " ";
last.textContent = " ";

gsap.fromTo(first, 
    {x: -100, opacity: 0},
    {x: 200, opacity: 1, 
      duration: 2.7, 
      stagger: 0.2,
      ease: "back.out",
      text: {
        value: "MALLORY",
        delimiter: "",
        speed: 0.2
      }
    })

  gsap.fromTo(last, 
    {x: 700, y: 200, opacity: 0},
    {x: 400, opacity: 1, 
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
}
function closeNav(){
  console.log("close nav");
  overlay.style.height = "0%";
  closeNavButton.style.visibility = "hidden";
}
// gsap.fromTo(nameTitle, 
//   {x: -400, opacity: 0}, 
//   {x: 200, opacity: 1, duration: 3})

// nameArray.forEach(element => {
//   console.log(nameTitle.textContent);
//   gsap.to(nameTitle.textContent, 
//     {innerText: nameTitle.textContent += element, delay: 2}
//   );
// });
// gsap.fromTo(nameTitle, 
//   {x: -500, y:-200, rotation: -20}, 
//   {x: 200, y:0, rotation: 0}
// );

// const summonBeanA = document.getElementById('summon-a');
// summonBeanA.addEventListener('click', getABean);
// const summonBeanB = document.getElementById('summon-b');
// summonBeanB.addEventListener('click', getABean);
// const merge = document.getElementById('merge');
// merge.addEventListener('click', mergeBeans);

