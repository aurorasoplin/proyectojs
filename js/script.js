
//primera entrega
//condicional if
//let edades = 18;
//edades = prompt("ingresa tu edad para ver si tenemos prendas para ti");
//if (edades >= 18) {
//alert("tenemos prendas para ti");
//} else if (edades < 18) {
// alert("no tenemos prendas para ti");
//}



//const buzos = {
//  talle: "s",
//  color: "negro",
//  precio: 100,
//  stock: 50
//}
//const camperas = {
//  talle: "m",
//  color: "beige",
//  precio: 150,
//  stock: 100
//}
//const remeras = {
//  talle: "s",
//  color: "blancs",
//  precio: 50,
//  stock: 20
//}

//const pantalones = {
//  talle: 40,
//  color: "azul",
//  precio: 80,
//  stock: 15
//}
//const shorts = {
//  talle: "l",
//  color: "gris",
//  precio: 60,
//  stock: 5
//}

//const productos = [buzos, camperas, remeras, pantalones, shorts]
//console.log(productos)
  
//for (const producto of productos) {
//console.log(producto)
//console.log(`talle:${producto.talle} stock: ${producto.stock} `)

//}
//function

//function costo() {
//  let buzo = 100
//  let remera = 50
//  let resultado = buzo + remera
//  return resultado
//}
//console.log(costo())
//let sinenvio = costo()
//console.log("el precio cin envio es:" +sinenvio)
//let conenvio = sinenvio * 1.15
//console.log("el precio con envio es:" +conenvio)

  
//let menu = parseInt(prompt("ingrese: \n 1-ver buzos \n 2-ver camperas \n 3-ver remeras \n 4-ver pantalones \n 5-ver shorts  \n 6-salir"))
//while (menu !==6) {
//switch (menu) {
//     case 1:
//     alert("tenemos buzos de: \n friza \n morley \n lycra")
//      break
//    case 2:
//      alert("tenemos camperas: \n impermeables \n rompevientos \n de algodon")
//      break
//    case 3:
//      alert("tenemos remeras de: \n algodon \n termicas \n viscosa")
//      break
//    case 4:
//      alert("tenemos pantalones de: \n corderoy \n vestir \n gabardina")
//      break
//    case 5:
//      alert("tenemos short: \n deportivos \n de baño \n de algodon ")
//      break
//    default:
//      alert("opcion no valida")
//      break
  
    
// }
// menu = parseInt(prompt("ingrese: \n 1-ver buzos \n 2-ver camperas \n 3-ver remeras \n 4-ver pantalones \n 5-ver shorts  \n 6-salir"))
//}
//alert("gracias")



//segunda entrega
//STORAGE

const productos = [
  {
    id: 1,
    nombre: "buzo",
    talle: "talle:S",
    color: "color:negro",
    precio: "precio:$100",
    stock: "stock:50 unidades",
    imagen: "./img/hom-buzo.jpg",
  },
  {
    id: 2,
    nombre: "blusa",
    talle: "talle:M",
    color: "color:beige",
    precio: "precio:$150",
    stock: "stock:100 unidades",
    imagen: "./img/muj-arruche.jpg",
  },
  {
    id: 3,
    nombre: "remeras",
    talle: "talle:S",
    color: "color:blanco",
    precio: "precio:$50",
    stock: "stock:20 unidades",
    imagen: "./img/muj-arruche.jpg",
  },
  {
    id: 4,
    nombre: "pantalon",
    talle: "talle:40",
    color: "color:azul",
    precio: "precio:$80",
    stock: "stock:15 unidades ",
    imagen: "./img/muj-palazo.jpg",
  },
  {
    id: 5,
    nombre: "short",
    talle: "talle:L",
    color: "color:gris",
    precio: "precio:$60",
    stock: "stock:5 unidades",
    imagen: "./img/hom-short.jpg",
  },
];
const listaProductos = []
let contenedorProductos = document.getElementById("contenedor-productos")
function renderproductos(listadoArray) {
  listadoArray.forEach((producto) => {
    const card = document.createElement("div")
    card.innerHTML = `<img src=${producto.imagen}>
                  <h3>${producto.nombre}</h3>
                  <p>${producto.talle}</p>
                  <p>${producto.color}</p>
                  <P>${producto.precio}</p>
                  <button class="agregarProductos" id=${producto.id}>Agregar al carrito</button>`;
    contenedorProductos.appendChild(card)
    
  })
  addToCardButton()
}
renderproductos(productos)


function addToCardButton() {
  addButton = document.querySelectorAll(".agregarProductos")
  addButton.forEach(button => {
    button.onclick = (e) => {
      const productId = e.currentTarget.id
      const selectedProduct = productos.find (producto => producto.id == productId)
      listaProductos.push(selectedProduct)
      console.log(listaProductos)

      localStorage.setItem("listaProductos", JSON.stringify(listaProductos))
    }
})
}


