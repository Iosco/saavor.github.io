/*
 scripts.js
 (c) Joseph Malone
 */

console.log("Joseph Malone")
console.log("")
console.log("Hello person looking at console! Hope you've been having a good day!")

// Animate.css
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
