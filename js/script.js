
//primera entrega
//condicional if
// let edades = 18;
// edades = prompt("ingresa tu edad para ver si tenemos prendas para ti");
// if (edades >= 18) {
// alert("tenemos prendas para ti");
// } else if (edades < 18) {
// alert("no tenemos prendas para ti");
// }
//console.log()

// const productos = ["buzos", "camperas", "remeras", "pantalones", "shorts"]
// console.log(productos)
  
// //function

// function costo() {
//  let buzo = 100
//  let remera = 50
//  let resultado = buzo + remera
//  return resultado
// }

// console.log(costo())
// let sinenvio = costo()
// console.log("el precio sin envio es:" +sinenvio)
// let conenvio = sinenvio * 1.15
// console.log("el precio con envio es:" +conenvio)


// function buzo() {
//   const precioBuzo = 150
//   const descuentoBuzo = precioBuzo * 10 / 100 - precioBuzo
//   alert("el precio del buzo con descuento es de" + descuentoBuzo)
// }
// function remera() {
//   const precioRemera = 50
//   const descuentoRemera = precioRemera * 10 / 100 - precioRemera
//   alert("el precio de la remera con descuento es de" + descuentoRemera )
// }
// function campera() {
//   const precioCampera = 250
//   const descuentoCampera = precioCampera* 15 / 100 - precioCampera
//   alert("el precio de la campera con descuento es de" + descuentoCampera)
// }
// function pantalon() {
//   const precioPantalon = 350
//   const descuentoPantalon = precioPantalon * 15 / 100 - precioPantalon
//   alert("el precio del pantalon con descuento es de" + descuentoPantalon)
// }
// function short() {
//   const precioshort = 150
//   const descuentoshort = precioshort * 15 / 100 - precioshort
//   alert("el precio del short con descuento es de" + descuentoshort)
// }
  
// let menu = parseInt(prompt("ingrese para ver el descuento de: \n 1- buzo \n 2- remera \n 3- campera \n 4- pantalon \n 5- short \n 6-salir"))
// while (menu !==6) {
// switch (menu) {
//     case 1: buzo()
    
//      break
//    case 2:remera()
     
//      break
//    case 3:campera()
     
//      break
//    case 4:pantalon()
     
//      break
//    case 5:short()
     
//      break
//    default:
//      alert("opcion no valida")
//      break
  
    
// }
//   menu = parseInt(prompt("ingrese para ver el descuento de: \n 1- buzo \n 2 - remera \n 3 - campera \n 4 - pantalon \n 5 - short  \n 6 - salir"))
// }
// alert("gracias")



//segunda entrega
//STORAGE

const productos = [
  {
    id: 1,
    nombre: "buzo",
    talle: "talle:S",
    color: "color:negro",
    precio: 100,
    cantidad: 1,
    imagen: "./img/hom-buzo.jpg"
  },
  {
    id: 2,
    nombre: "blusa",
    talle: "talle:M",
    color: "color:beige",
    precio: 150,
    cantidad: 1,
    imagen: "./img/muj-arruche.jpg"
  },
  {
    id: 3,
    nombre: "remeras",
    talle: "talle:S",
    color: "color:blanco",
    precio: 50,
    cantidad: 1,
    imagen: "./img/muj-arruche.jpg"
  },
  {
    id: 4,
    nombre: "pantalon",
    talle: "talle:40",
    color: "color:azul",
    precio: 80,
    cantidad: 1,
    imagen: "./img/muj-palazo.jpg"
  },
  {
    id: 5,
    nombre: "short",
    talle: "talle:L",
    color: "color:gris",
    precio: 60,
    cantidad: 1,
    imagen: "./img/hom-short.jpg"
  }
]


let tarjetasproductos = document.getElementById("tarjetasproductos")

function listaProductos (listaTarjetas) {
  listaTarjetas.forEach ((producto) => {
    const tarjetas = document.createElement("div")
    tarjetas.innerHTML = `<img src=${producto.imagen}>
                          <h3>${producto.nombre}</h3>
                          <p>${producto.talle}</p>
                          <p>${producto.color}</p>  
                          <P>precio:$${producto.precio}</p>
                          
                <button class="agregado" id=${producto.id}>Agregar al carrito</button>`
    tarjetasproductos.appendChild(tarjetas)
  })
  agregarTarjetas()
}

listaProductos(productos)


const productosEnCarrito = []

      

function agregarTarjetas() {
  
  
  agregarAlCarrito = document.querySelectorAll(".agregado")
  agregarAlCarrito.forEach(button => {
    button.onclick = (e) => {
      const productoId = e.currentTarget.id
      const elegido = productos.find(producto => producto.id == productoId)
      if (elegido) {
        productosEnCarrito.push(elegido)
      }else  {
        // const cantidades = productosEnCarrito.length
        // const masproductos = productos.map(producto => producto.id === producto.id)
          productosEnCarrito.cantidad++
        
        }
      console.log(productosEnCarrito)
      localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito))
    }
  })

}
agregarTarjetas()







// function productoRepetido() {
//   const existe = productosEnCarrito.some(producto => producto.id === producto.id)
//   if (existe) {
//     const existente = productosEnCarrito.map(producto => {
//       if (producto.id === producto.id) {
//         nuevoproducto.cantidad++
//         return productos
//       }
//       else {
//         return productos
//       }
//     })
    
//   }

// }




