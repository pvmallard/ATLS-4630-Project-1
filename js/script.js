import { gsap } from "gsap"; 
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,SplitText);

let tl = 
    gsap.timeline(), 
    mySplitText = new SplitText("#name", { type: "words,chars"}), 
    chars = mySplitText.chars;
gsap.set("#name", {perspective: 400});
console.log(chars);

tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01
  });

// document.getElementById("animate").onclick = function () {
//     tl.restart();
// };

// fetch('https://allergymenu.uk/api/v1') // fetch API
//     .then(response => console.log(response.json()))

// const summonBeanA = document.getElementById('summon-a');
// summonBeanA.addEventListener('click', getABean);
// const summonBeanB = document.getElementById('summon-b');
// summonBeanB.addEventListener('click', getABean);
// const merge = document.getElementById('merge');
// merge.addEventListener('click', mergeBeans);

