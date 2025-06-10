let tarjetaStorage = localStorage.getItem("productosEnCarrito")
tarjetaStorage = JSON.parse(tarjetaStorage)

let carritoProceso = document.getElementById("carrito")

function crearCarrito(carritoLleno) {
  if (carritoLleno) {
    carritoLleno.forEach((producto) => {
    
      const tarjetaCarrito = document.createElement("div")
      tarjetaCarrito.innerHTML = ` 
                     <h3>${producto.nombre}</h3>
                     <p>${producto.talle}</p>
                     <p>${producto.color}</p>
                     <P>precio:$${producto.precio}</p>
                     <p>cantidad: ${producto.cantidad}</p>
                     <button class="menos">-</button>
                     <span class="cantidad">0</span>
                     <button class="mas">+</button>
                     `
      carritoProceso.appendChild(tarjetaCarrito)
      
    })
  }
  // else if (elegido === elegido) {
  //   // const cantidades = productosEnCarrito.length
  //   // const masproductos = productos.map(producto => producto.id === producto.id)
  //     productosEnCarrito.cantidad++
    
  //   }
 else  {
    let textoVacio = document.getElementById("carrito-Vacio")
    const tuCarrito = document.createElement("p")
    tuCarrito.innerHTML = `<p>tu carrito esta vacio</p>`
    textoVacio.appendChild(tuCarrito)
}
  eliminarTarjetas()
};
crearCarrito(tarjetaStorage)



let productosEliminados = []

function eliminarTarjetas () {
eliminarCarrito = document.querySelectorAll(".eliminar")
  eliminarCarrito.forEach (botoneliminar => {
    botoneliminar.onclick = (e) => {
    const productoEliminado = e.currentTarget.id
      const eliminado = productosEliminados.filter(producto => producto.id == productoEliminado)
       productosEliminados.slice(eliminado)
 
      localStorage.removeItem("productosEnCarrito")
    }
  })
  
}
eliminarTarjetas()

let vaciado = document.getElementById("vaciar")
const vaciarCarrito = document.createElement("div")
vaciarCarrito.innerHTML = `<button class="eliminar" onclik= "eliminarTarjetas()">vaciar carrito</button>`
vaciado.appendChild(vaciarCarrito)
vaciado.addEventListener("click", eliminarTarjetas)



const totalCarrito = tarjetaStorage.reduce((contador, tarjetaStorage) => contador + tarjetaStorage.precio * tarjetaStorage.cantidad , 0)
let total = document.getElementById("total")
const textoCarrito= document.createElement("div")
textoCarrito.innerHTML = `<div>total es: ${totalCarrito} </div>`
  total.appendChild(textoCarrito)







