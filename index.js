// first div
import FirstDiv1Animation from './lottie/new/newnew/Features_Idle (1).json'
import FirstDiv2Animation from './lottie/new/Scan&Pay_Transition.json'
import FirstDiv3Animation from './lottie/new/Scan&Pay_Loop.json'
// second div
import SecondDivAnimation from './lottie/new/newnew/PopCoin (1).json'
// third div
import ThirdDivAnimation from './lottie/new/newnew/PopShop.json'
// fourth div
import FourthDivAnimation from './lottie/new/newnew/Rewards_2.json'
// fifth div
import FifthDiv1Animation from './lottie/new/newnew/Feature_ZoomOUT (1).json'
import FifthDiv2Animation from './lottie/new/newnew/Feature_ZoomOUT_Idle.json'

import lottieWeb from "lottie-web";
import smoothScrollIntoView from "smooth-scroll-into-view-if-needed"; // Import the polyfill

document.getElementById("first").addEventListener("touchmove", firstDivMove);
document.getElementById("second").addEventListener("touchmove", secondDivMove);
document.getElementById("third").addEventListener("touchmove", thirdDivMove);
document.getElementById("fourth").addEventListener("touchmove", fourthDivMove);
// skip buttons
document.getElementById("skip-btn-first").addEventListener("click", handleRewardsBtn);
document.getElementById("skip-btn-second").addEventListener("click", handleRewardsBtn);
document.getElementById("skip-btn-third").addEventListener("click", handleRewardsBtn);
document.getElementById("skip-btn-fourth").addEventListener("click", handleRewardsBtn);

document.getElementById("3rd-div-next-btn").addEventListener("click", thirdDivMove);
document.getElementById("last-next-btn").addEventListener("click", lastNextBtn);

function lastNextBtn() {
    console.log("last next button clicked")
    if (window?.location?.search === "?device=ios") {
        window.location.href = "popclubapp://skiponboarding";
    }

    if (window?.location?.search === "?device=android") {
        window.JSInterface.skip()
    }
}

function handleRewardsBtn() {
    console.log("Skip Button Clicked")
    if (window?.location?.search === "?device=ios") {
        window.location.href = "popclubapp://skiponboarding";
    }

    if (window?.location?.search === "?device=android") {
        window.JSInterface.skip()
    }

}

var count = 1;

console.log("count", count)

const animations = [FirstDiv1Animation, FirstDiv2Animation, FirstDiv3Animation]

/*
scan-loop -> 3rd frame
scan-transition - 2nd frame
1 -> 1st frame
*/
var animation1;
var animation2;
var animation3;

function playNextAnimation() {
    animation1.destroy()
    animation2 = lottieWeb.loadAnimation({
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
        animation3 = lottieWeb.loadAnimation({
            container: document.getElementById('lottieDivFirst'),
            animationData: animations[2],
            renderer: 'svg',
            loop: false,
            autoplay: true,
            name: "Demo Animation",
        });
        animation3.play()
        document.getElementById('card-visible-toggle').style.visibility = "visible";
    }
}

animation1 = lottieWeb.loadAnimation({
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
    animationData: ThirdDivAnimation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Demo Animation",
    animationSpeed: 0.1
});

// var animation5thDiv = lottieWeb.loadAnimation({
//     container: document.getElementById('lottieDivFifth'),
//     // TODO - replace this with actual animation
//     animationData: Test,
//     renderer: 'svg',
//     loop: true,
//     autoplay: false,
//     name: "testing",
// });

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
    // change the animation here
    playLastAnimation()
}

function fourthDivMove() {
    handleFourth()
    animation3rdDiv.setSpeed(0.5)
    animation3rdDiv.play()
    count = 4;
    console.log("count", count)
}

function playLastAnimation() {
    console.log("lastinggggggggg")
    animation1?.destroy()
    animation2?.destroy()
    animation3?.destroy()
    document.getElementById('lottieDivFirst').style.display = 'none';
    document.getElementById('lottieDivFifth').style.backgroundColor = 'black';
    document.getElementById('card-visible-toggle').style.display = "none";
    document.getElementById('fifth-bottom-div').style.display = "flex";
    document.getElementById("first").removeEventListener("touchmove", firstDivMove);
    // play animation
    const fifth1animation = lottieWeb.loadAnimation({
        container: document.getElementById('lottieDivFifth'),
        animationData: FifthDiv1Animation,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "testing",
    });
    fifth1animation.play()
    animation3rdDiv.destroy()

    fifth1animation.addEventListener('complete', playFive2animation);

    function playFive2animation() {
        console.log("complete last last")
        fifth1animation.destroy()
        const fifth2animation = lottieWeb.loadAnimation({
            container: document.getElementById('lottieDivFifth'),
            animationData: FifthDiv2Animation,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            name: "testing",
        });
        fifth2animation.play()
    }
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
        behavior: "auto",
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

