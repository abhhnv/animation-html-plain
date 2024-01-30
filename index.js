// import lottie from "lottie-web";
import lottie from 'lottie-web/build/player/lottie_light.min.js'

import One from './newlottiefiles/1.json'
import Two from './newlottiefiles/2.json'
import Three from './newlottiefiles/3.json'
import Four from './newlottiefiles/4.json'
import Fifth from './newlottiefiles/5.json'
import Sixth from './newlottiefiles/6.json'
// import Sixth_Loader from './newlottiefiles/Loader_Quadrant.json'
import Sixth_Loader from './newlottiefiles/7-2.json'

import Eight from './newlottiefiles/Supercard-3.json'
import Nine from './newlottiefiles/Shop_quadrant2-2.json'
import Ten from './newlottiefiles/10.json'
import Eleven from './newlottiefiles/11.json'
import Twelve from './newlottiefiles/12.json'
import Thirteen from './newlottiefiles/13.json'
import Fourteen from './newlottiefiles/Supercard-10.json'
import Fifteen from './newlottiefiles/Supercard-11.json'

document.getElementById("skip-top-btn").addEventListener("click", handleTopSkip)
document.getElementById("skip-bottom-btn").addEventListener("click", handleBottomSkip)


function handleTopSkip(){
    if (window?.location?.search === "?device=ios") {
        window.location.href = "popclubapp://skiponboarding";
    }

    if (window?.location?.search === "?device=android") {
        window.JSInterface.skip()
    }

}

function handleBottomSkip(){
    if (window?.location?.search === "?device=ios") {
        window.location.href = "popclubapp://skiponboarding";
    }

    if (window?.location?.search === "?device=android") {
        window.JSInterface.skip()
    }
}



var animation1
var animation2
var animation3
var animation4
var animation5
var animation6
var animation7
var animation8
var animation9
var animation10
var animation11
var animation12
var animation13
var animation14
var animation15

function first() {
    animation1 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: One
    });
    animation1.play()
    animation1.addEventListener('complete', () => {
        second();
    });
}
first()

function second() {
    animation1.destroy();
    animation2 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Two
    });
    animation2.play()
    animation2.addEventListener('complete', () => {
        document.getElementById("next-btn").style.visibility = "visible";
        document.getElementById("next-btn").addEventListener("click", handleNextButton)
    });
}

function handleNextButton() {
    third()
}

function third() {
    document.getElementById("skip-top-btn").style.visibility = "visible"
    animation2.destroy();
    animation3 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Three
    });
    animation3.play()
    animation3.addEventListener('complete', () => {
        document.getElementById("next-btn").style.visibility = "hidden";
        fourth();
    });
}

function fourth() {
    animation3.destroy();
    animation4 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Four
    });
    animation4.play()
    animation4.addEventListener('complete', () => {
        fifth()
    });
}

function fifth() {
    animation4.destroy();
    animation5 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Fifth
    });
    animation5.play()
    animation5.addEventListener('complete', () => {
        sixth()
    });
}

function sixth() {
    animation5.destroy();
    animation6 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Sixth
    });
    animation6.play()
    animation6.addEventListener('complete', () => {
        sixthloader()
    });
}

function sixthloader() {
    animation6.destroy();
    animation7 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        name: "Demo Animation",
        animationData: Sixth_Loader
    });
    animation7.play()
    document.getElementById('first-container').addEventListener("click", handleSixthLoaderClick)
    animation7.addEventListener('complete', () => {
    });
}

function handleSixthLoaderClick() {
    eigth()
}

function eigth() {
    document.getElementById("skip-top-btn").style.visibility = "visible"
    document.getElementById("skip-bottom-btn").style.visibility = "hidden"
    animation7.destroy();
    animation8 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Eight
    });
    animation8.play()
    document.getElementById('first-container').addEventListener("click", handleNineClick)
    animation8.addEventListener('complete', () => {
        // nine()
        console.log("clicked")
    });
}

// function nine() {
//     document.getElementById('first-container').removeEventListener("click", handleSixthLoaderClick)
//     animation8.destroy();
//     animation9 = lottie.loadAnimation({
//         container: document.getElementById('first-container'),
//         renderer: 'svg',
//         loop: true,
//         autoplay: false,
//         name: "Demo Animation",
//         animationData: Nine
//     });
//     animation9.play()
//     document.getElementById('first-container').addEventListener("click", handleNineClick)
//     animation9.addEventListener('complete', () => {
//         console.log("hello world")
//     });
// }

function handleNineClick() {
    ten();
}

function ten() {
    document.getElementById("skip-top-btn").style.visibility = "hidden"
    document.getElementById("skip-bottom-btn").style.visibility = "visible"

    animation8.destroy();
    animation10 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Ten
    });
    animation10.play()
    animation10.addEventListener('complete', () => {
        eleven()
    });
}

function eleven(){
    animation10.destroy();
    animation11 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        name: "Demo Animation",
        animationData: Eleven
    });
    animation11.play()
    document.getElementById('first-container').removeEventListener("click", handleNineClick)
    document.getElementById('first-container').addEventListener("click", handleElevenClick)
    animation11.addEventListener('complete', () => {
        handleElevenClick()
    });
}

function handleElevenClick(){
    console.log("eleven clicked")
    twelve()
}

function twelve(){
    document.getElementById("skip-top-btn").style.visibility = "visible"
    document.getElementById("skip-bottom-btn").style.visibility = "hidden"
    animation11.destroy();
    animation12 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Twelve
    });
    animation12.play()
    animation12.addEventListener('complete', () => {
        thirteen()
    });
}

function thirteen(){
    document.getElementById("skip-top-btn").style.visibility = "visible"
    document.getElementById("skip-bottom-btn").style.visibility = "hidden"
    animation12.destroy();
    animation13 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Thirteen
    });
    animation13.play()
    animation13.addEventListener('complete', () => {
        console.log("thirteen played")
        document.getElementById("next-btn").style.visibility = "visible";
        document.getElementById("next-btn").removeEventListener('click', handleNextButton)
        document.getElementById("next-btn").addEventListener('click', handleThirteenClick)
    });
}

function handleThirteenClick(){
    console.log("button clicked")
    fourteen()
}

function fourteen(){
    document.getElementById("next-btn").style.visibility = "hidden";
    document.getElementById("next-btn").removeEventListener('click', handleNextButton)
    document.getElementById("next-btn").removeEventListener('click', handleThirteenClick)

    animation13.destroy();
    animation14 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Fourteen
    });
    animation14.play()
    animation14.addEventListener('complete', () => {
        console.log("fourteen played")  
        document.getElementById("next-btn").style.visibility = "visible";
        fifteen()
    });
}


function fifteen(){
    document.getElementById("next-btn").style.visibility = "hidden";
    document.getElementById("next-btn").removeEventListener('click', handleNextButton)
    document.getElementById("next-btn").removeEventListener('click', handleThirteenClick)

    animation14.destroy();
    animation15 = lottie.loadAnimation({
        container: document.getElementById('first-container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Demo Animation",
        animationData: Fifteen
    });
    animation15.play()
    animation15.addEventListener('complete', () => {
        console.log("fifteen played")  
        document.getElementById("next-btn").style.visibility = "visible";
    });
}





// function handleTenClick(){
//     ten()
// }


// function ten(){
//     animation9.destroy();
//     animation10 = lottie.loadAnimation({
//         container: document.getElementById('first-container'),
//         renderer: 'svg',
//         loop: false,
//         autoplay: false,
//         name: "Demo Animation",
//         animationData: Nine
//     });
//     animation10.play()
//     animation10.addEventListener('complete', () => {
//         console.log("10000")
//     }); 
// }



// https://ik.imagekit.io/t2vt6tx4m/onboarding/1_yyGehxKhKc.json?updatedAt=1705916939231
// https://ik.imagekit.io/t2vt6tx4m/onboarding/2_GoL8XAtoF9.json?updatedAt=1705916939618
// https://ik.imagekit.io/t2vt6tx4m/onboarding/3_yqvysBjlOr.json?updatedAt=1705916939114
// https://ik.imagekit.io/t2vt6tx4m/onboarding/4_sHOx1Sy9CA.json?updatedAt=1705916939448
// https://ik.imagekit.io/t2vt6tx4m/onboarding/5_q-xivi4qaQ.json?updatedAt=1705916939490
// https://ik.imagekit.io/t2vt6tx4m/onboarding/6_WWIakZ0Z3A.json?updatedAt=1705916939310
// https://ik.imagekit.io/t2vt6tx4m/onboarding/7_70-nmNc_BG.json?updatedAt=1705916939509
// https://ik.imagekit.io/t2vt6tx4m/onboarding/8_Kho6C8mEtN.json?updatedAt=1705916939506
// https://ik.imagekit.io/t2vt6tx4m/onboarding/9_EJRnBCf2X-.json?updatedAt=1705916939396
// https://ik.imagekit.io/t2vt6tx4m/onboarding/10_PtxbVUeZ4j.json?updatedAt=1705916939512
// https://ik.imagekit.io/t2vt6tx4m/onboarding/11_UynPX7SIh.json?updatedAt=1705916941900
// https://ik.imagekit.io/t2vt6tx4m/onboarding/12_gsD0eBx4H.json?updatedAt=1705916941957
// https://ik.imagekit.io/t2vt6tx4m/onboarding/13_PkusgFYLsS.json?updatedAt=1705916942137
// https://ik.imagekit.io/t2vt6tx4m/onboarding/14_L8A5ht6U0D.json?updatedAt=1705916942353
// https://ik.imagekit.io/t2vt6tx4m/onboarding/15_wsncK51wwe.json?updatedAt=1705916942392