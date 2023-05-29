let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = parseInt(prompt("Ingrese su edad:"));

while (edad < 18){
    alert(`Disculpe ${nombre} tiene que ser mayor de edad para continuar`);
    edad = parseInt(prompt("Ingrese su edad:"));
}

const productos = [
    {producto: "Cerveza", nombre: "Brahama", precio: 273, stock: 50, image: "./images/cerveza-brahama-dorada-473-cc--.jpg"},
    {producto: "Cerveza", nombre: "Stella Artois Blanche", precio: 299, stock: 46, image: "./images/cerveza-stella-artois-blanche-473-cc--.jpg"},
    {producto: "Cerveza", nombre: "Corona 710cc", precio: 759, stock: 26, image: "./images/cerveza-corona---710-cc--.jpg"},
    {producto: "Whisky", nombre: "Jack Daniels Honey", precio: 18.743, stock: 10, image: "./images/whisky-jack-daniels-honey-750-ml--.jpg"},
    {producto: "Whisky", nombre: "Jack Daniels Old", precio: 18.743, stock: 15, image: "./images/whisky-jack-daniels-old-no-7-750-cc--.jpg"},
    {producto: "Aperitivo", nombre: "Fernet Branca", precio: 2.417, stock: 20, image: "./images/fernet-branca---750-cc--.jpg"}
]

let gridContainer = document.getElementById("grid-container");
console.log(gridContainer);

for (const producto of productos){
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.innerHTML = `<img src="${producto.image}" alt="Fernet Branca">
                            <span><hr></span>
                            <h3>$${producto.precio}</h3>
                            <h4>${producto.nombre}</h4>
                            <h5>Stock: ${producto.stock}</h5>`
    gridContainer.appendChild(gridItem);
}

const filtro = productos.filter((el) => el.producto.includes("Whisky"));
console.log(filtro);
const filtro2 = productos.filter((el) => el.precio <= 3.000);
console.log(filtro2);
const busqueda = productos.find((el) => el.nombre === "Brahama");
console.log(busqueda);