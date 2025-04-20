let cartStorage = localStorage.getItem("listaProductos");
cartStorage = JSON.parse(cartStorage);

let cartContainer = document.getElementById("cart-section");

function renderCarrito(cartItems) {
  cartItems.forEach((producto) => {
    const card = document.createElement("div");
    card.innerHTML = `
                     <h3>${producto.nombre}</h3>
                     <p>${producto.talle}</p>
                     <p>${producto.color}</p>
                     <P>${producto.precio}</p>`;
    cartContainer.appendChild(card);
    
  });
}
renderCarrito(cartStorage);

const productosAgregados = JSON.parse(localStorage.getItem("productosAgregados")) || []
if (productosAgregados.length > 0) {
  imprimirproductosAgregadosEnHTML(productosAgregados);
}
const productosPrecio = [
  {
    nombre: "buzo",
    precio: 100
    
  },
  {
   
    nombre: "blusa",
    precio: 150
  },
  {
    
    nombre: "remeras", precio: 50,
    
  },
  {
    nombre: "pantalon",
    precio: 80,
  },
  {
    nombre: "short",
    precio: 60
  }
]


const precioProducto = productosPrecio.map(producto => producto.precio)
const totalProductos = precioProducto.reduce((acumulador, precio) => acumulador + precio, 0)
const productoAgregado = []
function renderprecios(preciosArray) {
  preciosArray.forEach((producto) => {
    const total = document.createElement("header")
    total.innerHTML = `<h4>total:${totalProductos}</h4>`
    cartContainer.appendChild(total)
    localStorage.setItem("productoAgregado", JSON.stringify(productoAgregado));
  })
}
renderprecios(cartStorage)