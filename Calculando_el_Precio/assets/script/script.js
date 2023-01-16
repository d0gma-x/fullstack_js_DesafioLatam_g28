const precio = 6000

document.getElementById("cantidadTotal").addEventListener("click", function(){
    const cantidad = document.getElementById("selectCantidad").value
    const color = document.getElementById("selectColor").value

    const finalPrice = cantidad * precio;

    // document.getElementById("totalFinal").innerHTML = `<h5>${finalPrice}</h5>`
    document.getElementById("cantidadFinal").innerText = cantidad
    document.getElementById("totalFinal").innerText = finalPrice
    document.getElementById("colorCircle").style.backgroundColor = color
    // console.log(finalPrice)
})