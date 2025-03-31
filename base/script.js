let waiter = 75

document.addEventListener("DOMContentLoaded", function() {
    function norm() {
        document.querySelector(".laimg").style.filter = "invert(0)"
        setTimeout(invert, waiter)
    }
    
    function invert() {
        document.querySelector(".laimg").style.filter = "invert(1)"
        setTimeout(norm, waiter)
    }
    
    norm()
})
