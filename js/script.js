cont = "bienvenidos";

//condicional if
let edades = 18;
edades = prompt("ingresa tu edad para ver si tenemos prendas para ti");
if (edades >= 18) {
  alert("tenemos prendas para ti");
} else if (edades < 18) {
  alert("no tenemos prendas para ti");
}

//array
const productos = ["hombre", "mujer", "accesorios"];
console.log(productos[0]);
let categorias = {
  hombre: "remeras",
  mujer: "top",
  accesorios: "carteras",
};
console.log(categorias.accesorios);
console.log(categorias.mujer);

//ciclo for
let ingresaNumero = prompt("ingresa el numero de prendas que desea");

for (; prendasDisponibles < 10; prendasDisponibles--) {
  
  alert(prendasDisponibles);
}
