let gridContainer = document.getElementById("grid-container");
let btnCarrito = document.querySelectorAll(".btnCarrito");

const pedirProductos = async () => {
    const resp = await
    fetch("/productos.json")
    productos = await resp.json()
    productos.forEach(() => {
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
            btnCarrito.forEach((selectCarrito) => {
            selectCarrito.addEventListener("click", agregarCarrito);
            })
        }
        
        let carrito;
        let productosEnCarritoLS = localStorage.getItem("carrito");
        if (productosEnCarritoLS) {
            carrito = JSON.parse(productosEnCarritoLS);
            actualizarContadorCarrito()
        }else {
            carrito = [];
        }
        
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
            console.log(carrito)
        }
        
        function actualizarContadorCarrito() {
            let contador = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
            contadorCarrito.innerHTML = contador;
        }
    })
}

pedirProductos()



