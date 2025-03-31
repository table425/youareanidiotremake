let audi = new Audio("idiot.mp3")

function letthefunbegin() {
    audi.play()
    setInterval(function() {
        audi.play()
    }, 40000)
    let newwind = window.open("/base/otherhtml.html")
}

setInterval(function() {
    let newwind = window.open("/base/otherhtml.html")
    audi.play()
}, 5000)
