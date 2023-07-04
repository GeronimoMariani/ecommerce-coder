let productosEnCarrito = localStorage.getItem("carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoContainer = document.querySelector("#grid-container-carrito");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoAcciones = document.querySelector("#carrito-acciones");
let carritoEliminar = document.querySelectorAll(".carrito-eliminar");
const total = document.querySelector("#total");

function cargarProductos() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        carritoVacio.classList.add("disabled");
        carritoContainer.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
    
        carritoContainer.innerHTML = "";
    
        productosEnCarrito.forEach((producto) => {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item-carrito");
            gridItem.innerHTML = `<img class="imgCarrito" src="${producto.image}" alt="${producto.alt}">
                                    <div class="carrito-nombre">
                                        <h5>Nombre</h5>
                                        <h4>${producto.nombre}</h4>
                                    </div>
                                    <div class="carrito-cantidad">
                                        <h5>Cantidad</h5>
                                        <h4>${producto.cantidad}</h4>
                                    </div>
                                    <div class="carrito-total">
                                        <h5>Precio</h5>
                                        <h4>$${producto.precio}</h4>
                                    </div>
                                    <div class="carrito-subtotal">
                                        <h5>Subtotal</h5>
                                        <h4>$${producto.precio * producto.cantidad}</h4>
                                    </div>
                                    <button class="carrito-eliminar" id="${producto.id}"><i class="fa-solid fa-trash"></i></button>`
            carritoContainer.appendChild(gridItem);
        })
    } else {
        carritoVacio.classList.remove("disabled");
        carritoContainer.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
    }
    actualizarBotonEliminar()
    actualizarTotal()
}

cargarProductos()

function actualizarBotonEliminar() {
    carritoEliminar = document.querySelectorAll(".carrito-eliminar");
    carritoEliminar.forEach((selectCarrito) => {
        selectCarrito.addEventListener("click", eliminarProducto);
    })
}

function eliminarProducto(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
    cargarProductos()
}

carritoEliminar.forEach((productoElminar) => {
    productoElminar.addEventListener("click", () => {
        Swal.fire({
            icon: 'success',
            title: 'Eliminado!',
            text: 'Su producto a sido eliminado correctamente!',
            showConfirmButton: false,
            timer: 500,
        })
    })
})

let vaciarCarrito = document.querySelector(".boton-vaciar");
vaciarCarrito.addEventListener("click", () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "No puedes revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
            cargarProductos()
            Swal.fire(
                'Eliminado!',
                'Su carrito a sido eliminado.',
                'success'
            )
            window.scrollTo(0, 0);
        }
    })
})

function actualizarTotal() {
    const sumaTotal = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `Total: $${sumaTotal}`;
}

let realizarCompra = document.querySelector(".boton-comprar");
realizarCompra.addEventListener("click", () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "No puedes revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
            cargarProductos()
            Swal.fire(
                'Compra exitosa!',
                'Sus productos llegaran en 2 dias habiles!',
                'success'
            )
            window.scrollTo(0, 0);
        }
    })
})