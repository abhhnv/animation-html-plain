import FirstDiv1Animation from './lottie/1.json'
import FirstDiv2Animation from './lottie/scan_transition.json'
import FirstDiv3Animation from './lottie/scan_loop.json'

import lottieWeb from "lottie-web";
// Add event listeners to the buttons
// document.getElementById("firstbtn").addEventListener("click", handleFirst);
document.getElementById("secondbtn").addEventListener("click", handleSecond);
document.getElementById("thirdbtn").addEventListener("click", handleThird);
document.getElementById("fourthbtn").addEventListener("click", handleFourth);

document.getElementById("first").addEventListener("touchmove", firstDivMove);
document.getElementById("second").addEventListener("touchmove", secondDivMove);
document.getElementById("third").addEventListener("touchmove", thirdDivMove);
document.getElementById("fourth").addEventListener("touchmove", fourthDivMove);

const animations = [FirstDiv1Animation, FirstDiv2Animation, FirstDiv3Animation]

/*
scan-loop -> 3rd frame
scan-transition - 2nd frame
1 -> 1st frame
*/


function playNextAnimation() {
    animation1.destroy()
    var animation2 = lottieWeb.loadAnimation({
        container: document.getElementById('lottieDivFirst'),
        animationData: animations[1],
        renderer: 'svg',
        loop: false,
        autoplay: true,
        name: "Demo Animation",
    });

    animation2.play()
    animation2.addEventListener('complete', playNextNextAnimation);
    
    function playNextNextAnimation() {
        console.log("second complete")
        animation2.destroy()
        var animation3 = lottieWeb.loadAnimation({
            container: document.getElementById('lottieDivFirst'),
            animationData: animations[2],
            renderer: 'svg',
            loop: false,
            autoplay: true,
            name: "Demo Animation",
        });
        animation3.play()
    }
}

var animation1 = lottieWeb.loadAnimation({
    container: document.getElementById('lottieDivFirst'),
    animationData: animations[0],
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: "Demo Animation",
});

animation1.addEventListener('complete', playNextAnimation);

function firstDivMove() {
    handleFirst()
}

function secondDivMove() {
    handleSecond()
}

function thirdDivMove() {
    handleThird()
}

function fourthDivMove() {
    handleFourth()
}

function enableScrolling() {
    document.getElementById("maincontainer").style.overflow = "auto";
    document.body.style.overflow = "auto";
}

function disableScrolling() {
    document.getElementById("maincontainer").style.overflow = "hidden";
    document.body.style.overflow = "hidden";
}

function handleFirst() {
    enableScrolling();
    const ele = document.getElementById("second");
    ele?.scrollIntoView({ behavior: "smooth" });
    disableScrolling();
}

function handleSecond() {
    enableScrolling();
    const ele = document.getElementById("fourth");
    ele?.scrollIntoView({ behavior: "smooth" });
    disableScrolling();
}

function handleThird() {
    enableScrolling();
    const ele = document.getElementById("first");
    ele?.scrollIntoView({ behavior: "smooth" });
    disableScrolling();

}

function handleFourth() {
    enableScrolling();
    const ele = document.getElementById("third");
    ele?.scrollIntoView({ behavior: "smooth" });
    disableScrolling();
}

