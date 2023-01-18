var color

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "a":
            color = "blue"
            break
        case "s":
            color = "green"
            break
        case "d":
            color = "aqua"
            break
        default:
            color = null
            break

    }
    console.log(color)
})

document.getElementById("caja1").addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})

document.getElementById("caja2").addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})

document.getElementById("caja3").addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})

document.getElementById("caja4").addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
