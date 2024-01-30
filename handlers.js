function handleTopSkip() {
    if (window?.location?.search === "?device=ios") {
        window.location.href = "popclubapp://skiponboarding";
    }

    if (window?.location?.search === "?device=android") {
        window.JSInterface.skip()
    }

}

function handleBottomSkip() {
    if (window?.location?.search === "?device=ios") {
        window.location.href = "popclubapp://skiponboarding";
    }

    if (window?.location?.search === "?device=android") {
        window.JSInterface.skip()
    }
}

export { handleTopSkip, handleBottomSkip }