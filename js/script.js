let bienvenido = document.getElementById("bienvenido");

Swal.fire({
    title: 'Ingrese su nombre completo:',
    input: 'text',
    inputAttributes: {
    autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Crear usuario'
}).then((result) => {
    if (result.isConfirmed) {
        const usuario = result.value;
        bienvenido.innerHTML = `<i class="fa-regular fa-user" style="color: #ffffff;"></i>Bienvenido: ${usuario}`
    }
});

/* const infoUsuario = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
}

console.log(infoUsuario);
const usuarioJSON = JSON.stringify(infoUsuario);
console.log(usuarioJSON)

localStorage.setItem("usuario", usuarioJSON);

const usuarioJSON2 = JSON.parse(usuarioJSON);
console.log(usuarioJSON2);

localStorage.setItem("nombre", usuarioJSON2.nombre);
localStorage.setItem("apellido", usuarioJSON2.apellido);
localStorage.setItem("edad", usuarioJSON2.edad);

let nombreLocal = localStorage.getItem("nombre"); 
let apellidoLocal = localStorage.getItem("apellido"); 
let edadLocal = localStorage.getItem("edad");  */


class Bebidas {
    constructor(id, categoria, nombre, precio, stock, image, alt) {
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.image = image;
        this.alt = alt;
    }
}

const productos = []

productos.push(new Bebidas("cerveza-01", "cervezas", "Brahama", 273, 50, "./images/cerveza-brahama-dorada-473-cc--.jpg", "Brahama"));
productos.push(new Bebidas("cerveza-02", "cervezas", "Stella Artois Blanche", 299, 46, "./images/cerveza-stella-artois-blanche-473-cc--.jpg", "Stella Artois Blanche"));
productos.push(new Bebidas("cerveza-03", "cervezas", "Corona 710cc", 759, 26, "./images/cerveza-corona---710-cc--.jpg", "Corona 710cc"));
productos.push(new Bebidas("whisky-01", "whiskies", "Jack Daniels Honey", 18743, 10, "./images/whisky-jack-daniels-honey-750-ml--.jpg", "Jack Daniels Honey"));
productos.push(new Bebidas("whisky-02", "whiskies", "Jack Daniels Old", 18743, 15, "./images/whisky-jack-daniels-old-no-7-750-cc--.jpg", "Jack Daniels Old"));
productos.push(new Bebidas("whisky-03", "whiskies", "Johnnie Walker Black Label", 15155, 13, "./images/whisky-johnnie-walker-black-label-750ml.jpg", "Johnnie Walker Black Label"));
productos.push(new Bebidas("aperitivo-01", "aperitivos", "Fernet Branca", 2417, 20, "./images/fernet-branca---750-cc--.jpg", "Fernet Branca"));
productos.push(new Bebidas("vino-01", "vinos", "Vino Varietal terra Malbec Roble", 1450, 18, "./images/vino-varietal-terra-malbec-roble-750-cc--.jpg", "Vino Varietal terra Malbec Roble"));
productos.push(new Bebidas("vino-02", "vinos", "Vino Varietal Dada Chocolate", 1040, 23, "./images/vino-varietal-dada-n§8-chocolate-750-cc--.jpg", "Vino Varietal Dada Chocolate"));
productos.push(new Bebidas("vino-03", "vinos", "Mosquita Muerta Blend Tintas", 6400, 8, "./images/vinos-premium-mosquita-muerta-blend-tintas-750-cc--.jpg", "Mosquita Muerta Blend Tintas"));

console.log(productos);

let gridContainer = document.getElementById("grid-container");
let btnCarrito = document.querySelectorAll(".btnCarrito");
console.log(gridContainer);

function agregarProductos (productosElegidos) {
    gridContainer.innerHTML = "";
    productosElegidos.forEach(producto => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.innerHTML = `<img id="producto-imagen" src="${producto.image}" alt="${producto.alt}">
                                <span><hr></span>
                                <h3 id="producto-precio">$${producto.precio}</h3>
                                <h4 id="producto-nombre">${producto.nombre}</h4>
                                <h5 id="producto-stock">Stock: ${producto.stock}</h5>
                                <button class= "btnCarrito" id="${producto.id}">Agregar al carrito</button>`
        gridContainer.appendChild(gridItem);
    })
    actualizarBotonCarrito()
}

agregarProductos(productos)

let botonNav = document.querySelectorAll(".navButton");
let tituloPrincipal = document.querySelector("#titulo-principal");
const contadorCarrito = document.querySelector("#contadorCarrito")

botonNav.forEach(nav => {
    nav.addEventListener("click", (e) => {
        if (e.currentTarget.id != "todos") {
            const seleccionTitulo = productos.find(producto => producto.categoria === e.currentTarget.id);
            tituloPrincipal.innerText = seleccionTitulo.categoria.toUpperCase();
            const seleccionNav = productos.filter(producto => producto.categoria === e.currentTarget.id);
            agregarProductos(seleccionNav);
        }else {
            tituloPrincipal.innerText = "TODOS LOS PRODUCTOS";
            agregarProductos(productos);
        }
    })
})

function actualizarBotonCarrito() {
    btnCarrito = document.querySelectorAll(".btnCarrito");
}

btnCarrito.forEach((selectCarrito) => {
    selectCarrito.addEventListener("click", agregarCarrito);
})

const carrito = []

function agregarCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(carrito.some(producto => producto.id === idBoton)) {
        const indexCarrito = carrito.findIndex(producto => producto.id === idBoton);
        carrito[indexCarrito].cantidad++
    }else {
        productoAgregado.cantidad = 1;
        carrito.push(productoAgregado);
    }
    Swal.fire({
        icon: 'success',
        title: 'Genial!',
        text: 'Su producto a sido agregado correctamente!',
        showConfirmButton: false,
        timer: 1000,
    })
    actualizarContadorCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarContadorCarrito() {
    let contador = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contadorCarrito.innerHTML = contador;
}
