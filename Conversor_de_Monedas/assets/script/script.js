const arrayDivisas = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"]

const SelectDivisas = document.getElementById("SelectDivisa")
const TextResultado = document.getElementById("resultado")
const buttonConvert = document.getElementById("convertirDivisa")
const InputConvertir = document.getElementById("MontoAConvertir")
const chartContainer = document.getElementById("chartContainer")

function createChart(dataObject){
    chartContainer.innerHTML = '<canvas id="chart"></canvas>'
    canvas = document.getElementById("chart")

    const data = {
        type: "line",
        data: {
            labels: dataObject.dates,
            datasets:[
                {
                    label: 'Ultimos 10 dias',
                    data: dataObject.data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        }
    }

    new Chart(canvas,data)
}

async function convertirMoneda(){
    try {
        divisa = SelectDivisas.value
        result = await fetch(`https://www.mindicador.cl/api/${divisa}`)
        resultJson = await result.json()
        divisaCLP = resultJson.serie[0].valor
        convertCLP = +InputConvertir.value

        TextResultado.innerText = (convertCLP/divisaCLP).toFixed(2)

        const lastDays = {}
        lastDays.data = resultJson.serie.slice(0,10).map(val => val.valor).reverse()
        lastDays.dates = resultJson.serie.slice(0,10).map(val => dayjs(val.fecha).format("DD-MM-YYYY")).reverse()
        createChart(lastDays)
        
    } catch (error) {
        
    }
}

selectHTML = SelectDivisas.innerHTML

arrayDivisas.forEach(val => selectHTML += `
    <option value=${val}>${val}</option>
`)

SelectDivisas.innerHTML = selectHTML

buttonConvert.addEventListener("click", convertirMoneda)