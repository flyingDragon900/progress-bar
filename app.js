const progressBar = document.querySelector("#progress-bar")
const section = document.querySelector("section")

const animateeProgressBar = () => {
    // getBoundingClientRect() gives where a div is located
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height -document.documentElement.clientHeight)) * 100
    let floorValue = Math.floor(progressWidth)
    // console.log(floorValue);
    progressBar.style.width=floorValue +"%"
}
window.addEventListener('scroll', animateeProgressBar)