let audi = new Audio("idiot.mp3")

function letthefunbegin() {
    audi.play()
    setInterval(function() {
        audi.play()
    }, 59000)
    let newwind = window.open("/base")
}
