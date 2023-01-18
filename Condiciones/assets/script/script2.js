function sumar(){
    let suma = Number(document.getElementById("poster-1").value) + Number(document.getElementById("poster-2").value) + Number(document.getElementById("poster-3").value)
    return suma
}

document.getElementById("submit").addEventListener("click", ()=>{
    let suma = sumar()

    if(suma > 10){
        alert("OJO!!! Compra máxima de 10 Póster")
        document.getElementById("submit").className = "btn btn-secondary text-center disabled"
    }
    document.getElementById("total").innerText = suma
})