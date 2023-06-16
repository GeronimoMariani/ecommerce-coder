let carritoEliminar = document.querySelectorAll(".carrito-eliminar");
carritoEliminar.forEach((productoElminar) => {
    productoElminar.addEventListener("click", () => {
        Swal.fire({
            icon: 'success',
            title: 'Eliminado!',
            text: 'Su producto a sido eliminado correctamente!',
            showConfirmButton: false,
            timer: 1000,
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
            Swal.fire(
                'Eliminado!',
                'Su carrito a sido eliminado.',
                'success'
            )
        }
    })
})

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
            Swal.fire(
                'Compra exitosa!',
                'Sus productos llegaran en 2 dias habiles!',
                'success'
            )
        }
    })
})