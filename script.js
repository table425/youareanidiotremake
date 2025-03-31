let audi = new Audio("idiot.mp3")

function letthefunbegin() {
    audi.play()
    setInterval(function() {
        audi.play()
    }, 40000)
    let newwind = window.open("/base/otherhtml2.html")
}

setInterval(function() {
    let newwind = window.open("/base/otherhtml2.html")
    audi.play()
}, 5000)
