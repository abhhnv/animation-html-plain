import FirstDiv1Animation from './lottie/1.json'
import FirstDiv2Animation from './lottie/scan_transition.json'
import FirstDiv3Animation from './lottie/scan_loop.json'
import SecondDivAnimation from './lottie/PopCoin.json'
import FourthDivAnimation from './lottie/Rewards.json'
import lottieWeb from "lottie-web";
import smoothScrollIntoView from "smooth-scroll-into-view-if-needed"; // Import the polyfill

document.getElementById("first").addEventListener("touchmove", firstDivMove);
document.getElementById("second").addEventListener("touchmove", secondDivMove);
document.getElementById("third").addEventListener("touchmove", thirdDivMove);
document.getElementById("fourth").addEventListener("touchmove", fourthDivMove);

var count = 1;

console.log("count", count)

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

// 2nd div onwards

var animation2ndDiv = lottieWeb.loadAnimation({
    container: document.getElementById('lottieDivSecond'),
    animationData: SecondDivAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Demo Animation",
});

var animation4thDiv = lottieWeb.loadAnimation({
    container: document.getElementById('lottieDivFourth'),
    animationData: FourthDivAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Demo Animation",
});

var animation3rdDiv = lottieWeb.loadAnimation({
    container: document.getElementById('lottieDivThird'),
    // TODO - replace this with actual animation
    animationData: FirstDiv2Animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Demo Animation",
});

animation1.addEventListener('complete', playNextAnimation);

function firstDivMove() {
    handleFirst()
    animation2ndDiv.play()
    count = 2
    console.log("count", count)
}

function secondDivMove() {
    handleSecond()
    animation4thDiv.play()
    count = 3
    console.log("count", count)
}

function thirdDivMove() {
    handleThird()
    count = 5
    console.log("count", count)
}

function fourthDivMove() {
    handleFourth()
    animation3rdDiv.play()
    count = 4;
    console.log("count", count)
}

console.log({ count })

function enableScrolling() {
    document.getElementById("maincontainer").style.overflow = "auto";
    // document.body.style.overflow = "auto";
}

function disableScrolling() {
    document.getElementById("maincontainer").style.overflow = "hidden";
    // document.body.style.overflow = "hidden";
}

function handleFirst() {
    enableScrolling();
    console.log("here")
    const ele = document.getElementById("second");
    smoothScrollIntoView(ele, {
        block: "start", // or "center" or "end"
        inline: "nearest", // or "center" or "end"
        behavior: "smooth",
    });
    disableScrolling();
}

function handleSecond() {
    enableScrolling();
    const ele = document.getElementById("fourth");
    smoothScrollIntoView(ele, {
        block: "start", // or "center" or "end"
        inline: "nearest", // or "center" or "end"
        behavior: "smooth",
    });
    disableScrolling();
}

function handleThird() {
    enableScrolling();
    const ele = document.getElementById("first");
    smoothScrollIntoView(ele, {
        block: "start", // or "center" or "end"
        inline: "nearest", // or "center" or "end"
        behavior: "smooth",
    });
    disableScrolling();
}

function handleFourth() {
    enableScrolling();
    const ele = document.getElementById("third");
    smoothScrollIntoView(ele, {
        block: "start", // or "center" or "end"
        inline: "nearest", // or "center" or "end"
        behavior: "smooth",
    });
    disableScrolling();
}

