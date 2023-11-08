import Lottie from "lottie-web";

// Add event listeners to the buttons
document.getElementById("first").addEventListener("click", handleFirst);
document.getElementById("second").addEventListener("click", handleSecond);
document.getElementById("third").addEventListener("click", handleThird);
document.getElementById("fourth").addEventListener("click", handleFourth);

Lottie.loadAnimation({
    container: document.getElementById("testingg"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/1.json"
});

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

