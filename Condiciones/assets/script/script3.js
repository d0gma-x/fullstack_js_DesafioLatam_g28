const password1 = "911"
const password2 = "714"

document.getElementById("checkPassword").addEventListener("click", () => {
    let resutado = document.getElementById("total")

    const numero1 = document.getElementById("cifra1").value
    const numero2 = document.getElementById("cifra2").value
    const numero3 = document.getElementById("cifra3").value

    const pass = numero1 + numero2 + numero3

    switch(pass){
        case password1:
            total.innerText = "Password 1 correcta"
            case password1:
                total.innerText = "Password-1 Correcta"
                break
            case password2:
                total.innerText = "Password-2 Correcta"
                break
            default:
                total.innerText = "Password Incorrecta"
                break
    }
})