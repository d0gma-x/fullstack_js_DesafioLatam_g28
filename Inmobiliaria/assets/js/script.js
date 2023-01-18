const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "./assets/img/prop1.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "./assets/img/prop2.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "./assets/img/prop3.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "./assets/img/prop4.png",
    rooms: 1,
    m: 6
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños",
    src:
      "./assets/img/prop5.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Casa Embrujada",
    description: "Vive una experiencia unica con tus demonios internos",
    src:
      "./assets/img/prop6.jpg",
    rooms: 5,
    m: 500
  }
];

var mainPropiedades = document.getElementById("propiedades")
var cuartosInput = document.getElementById("inputCuartos")
var desdeInput = document.getElementById("inputDesde")
var hastaInput = document.getElementById("inputHasta")
var buscarInput = document.getElementById("inputBuscar")
var totalText = document.getElementById("textTotal")

var total

function setTotal(array) {
  totalText.innerText = array.length
}

function alterMain(array) {
  propHTML = array.map(val => `
  <div class="propiedad">
    <div class="img">
      <img src="${val.src}" alt="prop">
    </div>
    <section>
      <h5>${val.name}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${val.rooms}</p>
          <p>Metros: ${val.m}</p>
        </div>
      <p class="my-3">${val.description}</p>
      <button class="btn btn-info">Ver más</button>
    </section>
  </div>
  `)
  let prop = propHTML.join("")
  mainPropiedades.innerHTML = prop
}

function init() {
  alterMain(propiedadesJSON)
}

function roomsFilter(array){
  numCuartos = cuartosInput.value
  if(!numCuartos){
    alert("falto por rellenar la cantidad de cuartos")
    return null
  }
  arrayFilter = array.filter(val => val.rooms == numCuartos)
  return arrayFilter
}

function metrosFilter(array){
  metrosDesde = desdeInput.value
  metrosHasta = hastaInput.value
  if(!metrosHasta || !metrosDesde){
    alert("Faltan los datos de metros cuadrados")
    return
  }
  arrayFilter = array.filter(val => val.m >= +metrosDesde && val.m <= +metrosHasta)
  return arrayFilter
}

buscarInput.addEventListener("click", function(){
  finalArray = roomsFilter(propiedadesJSON) != null ? roomsFilter(propiedadesJSON) : propiedadesJSON
  finalArray = metrosFilter(finalArray) != null ? metrosFilter(propiedadesJSON) : finalArray
  alterMain(finalArray)
  setTotal(finalArray)
})

init()