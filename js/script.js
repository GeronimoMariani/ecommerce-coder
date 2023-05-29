const productos = [
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

