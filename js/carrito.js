let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage);

let cartContainer = document.getElementById("cart-section");

function renderCarrito(cartItems) {
  cartItems.forEach((producto) => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${producto.nombre}</h3>
                     <p>${producto.talle}</p>
                     <p>${producto.color}</p>
                     <P>${producto.precio}</p>`;
    cartContainer.appendChild(card);
  });
}
renderCarrito(cartStorage);
