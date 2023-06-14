let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = parseInt(prompt("Ingrese su edad:"));

while (edad < 18){
    alert(`Disculpe ${nombre} tiene que ser mayor de edad para continuar`);
    edad = parseInt(prompt("Ingrese su edad:"));
}

localStorage.setItem("nombre", nombre);
localStorage.setItem("apellido", apellido);
localStorage.setItem("edad", edad);

let nombreLocal = localStorage.getItem("nombre"); 
let apellidoLocal = localStorage.getItem("apellido"); 
let edadLocal = localStorage.getItem("edad"); 

let bienvenido = document.getElementById("bienvenido");
bienvenido.innerHTML = `<i class="fa-regular fa-user" style="color: #ffffff;"></i>Bienvenido: ${nombreLocal} ${apellidoLocal}`

class Bebidas {
    constructor(id, producto, nombre, precio, stock, image, alt) {
        this.id = id;
        this.producto = producto;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.image = image;
        this.alt = alt;
    }
}

const productos = []

productos.push(new Bebidas(1, "Cerveza", "Brahama", 273, 50, "./images/cerveza-brahama-dorada-473-cc--.jpg", "Brahama"));
productos.push(new Bebidas(2, "Cerveza", "Stella Artois Blanche", 299, 46, "./images/cerveza-stella-artois-blanche-473-cc--.jpg", "Stella Artois Blanche"));
productos.push(new Bebidas(3, "Cerveza", "Corona 710cc", 759, 26, "./images/cerveza-corona---710-cc--.jpg", "Corona 710cc"));
productos.push(new Bebidas(4, "Whisky", "Jack Daniels Honey", 18743, 10, "./images/whisky-jack-daniels-honey-750-ml--.jpg", "Jack Daniels Honey"));
productos.push(new Bebidas(5, "Whisky", "Jack Daniels Old", 18743, 15, "./images/whisky-jack-daniels-old-no-7-750-cc--.jpg", "Jack Daniels Old"));
productos.push(new Bebidas(6, "Whisky", "Johnnie Walker Black Label", 15155, 13, "./images/whisky-johnnie-walker-black-label-750ml.jpg", "Johnnie Walker Black Label"));
productos.push(new Bebidas(7, "Aperitivo", "Fernet Branca", 2417, 20, "./images/fernet-branca---750-cc--.jpg", "Fernet Branca"));
productos.push(new Bebidas(8, "Vino", "Vino Varietal terra Malbec Roble", 1450, 18, "./images/vino-varietal-terra-malbec-roble-750-cc--.jpg", "Vino Varietal terra Malbec Roble"));
productos.push(new Bebidas(9, "Vino", "Vino Varietal Dada Chocolate", 1040, 23, "./images/vino-varietal-dada-n§8-chocolate-750-cc--.jpg", "Vino Varietal Dada Chocolate"));
productos.push(new Bebidas(10, "Vino", "Mosquita Muerta Blend Tintas", 6400, 8, "./images/vinos-premium-mosquita-muerta-blend-tintas-750-cc--.jpg", "Mosquita Muerta Blend Tintas"));

console.log(productos);

const carrito = []

let gridContainer = document.getElementById("grid-container");
console.log(gridContainer);

for (const producto of productos){
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.innerHTML = `<img src="${producto.image}" alt="${producto.alt}">
                            <span><hr></span>
                            <h3>$${producto.precio}</h3>
                            <h4>${producto.nombre}</h4>
                            <h5>Stock: ${producto.stock}</h5>
                            <button class= btnCarrito>Agregar al carrito</button>`
    gridContainer.appendChild(gridItem);
}

let btnCarrito = document.querySelectorAll(".btnCarrito");

btnCarrito.forEach((selectCarrito) => {
    selectCarrito.addEventListener("click", agregarCarrito);
})

function agregarCarrito(){
    console.log("funciona")
    /* carrito.push(gridItem); */
}

const filtro = productos.filter((el) => el.producto.includes("Whisky"));
console.log(filtro);
const filtro2 = productos.filter((el) => el.precio <= 3.000);
console.log(filtro2);
const busqueda = productos.find((el) => el.nombre === "Brahama");
console.log(busqueda);