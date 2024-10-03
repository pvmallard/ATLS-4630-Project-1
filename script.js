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


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo);



// fetch('https://allergymenu.uk/api/v1') // fetch API
//     .then(response => console.log(response.json()))

// const summonBeanA = document.getElementById('summon-a');
// summonBeanA.addEventListener('click', getABean);
// const summonBeanB = document.getElementById('summon-b');
// summonBeanB.addEventListener('click', getABean);
// const merge = document.getElementById('merge');
// merge.addEventListener('click', mergeBeans);

