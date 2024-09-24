const btn = document.getElementById("btn");
const menu = document.querySelector("#menu");

function mostrarPrecio(rutaImagen, nombre, precio) {
    let item = document.getElementById("item");

item.innerHTML="";

    const img = document.createElement("img");
    img.src = rutaImagen;
    img.alt = nombre;

    const container = document.createElement("div");
    container.className = "container";

    const nombreItem = document.createElement("h4");
    nombreItem.textContent = nombre; 

    const precioItem = document.createElement("p");
    precioItem.textContent = `Precio: ${precio} COP`;

    container.appendChild(nombreItem);
    container.appendChild(precioItem);

    item.innerHTML = ''; 
    item.appendChild(img);
    item.appendChild(container);
}

btn.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(menu.selectedIndex);

    switch (menu.selectedIndex) {
        case 1:
            mostrarPrecio("img/helado.png", "Helado", "3.400");
            break; 
        case 2:
            mostrarPrecio("img/hamburguesa.png", "Hamburguesa", "6.000");
            break; 
        case 3:
            mostrarPrecio("img/perro.png", "Hot Dog", "4.500");
            break;
        case 4:
            mostrarPrecio("img/ensalada.png", "Ensalada", "5.000");
            break; 
        default:
            console.log("Seleccione una opción válida.");
    }
});
