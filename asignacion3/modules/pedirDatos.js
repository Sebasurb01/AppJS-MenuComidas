import { mostrarPrecio } from './mostrarPrecio.js';

export function pedirDatos() {
    const btn = document.getElementById("btn");
    const menu = document.querySelector("#menu");

    btn.addEventListener("click", (event) => {
        event.preventDefault();

        switch (menu.selectedIndex) {
            case 1:
                mostrarPrecio("img/helado.png", "Helado", "3.400");
                document.getElementById("miInput").value = "helado";
             //   document.querySelector("#btn").addEventListener("click", newElement);
        
                break;
            case 2:
                mostrarPrecio("img/hamburguesa.png", "Hamburguesa", "6.000");
                document.getElementById("miInput").value = "hamburguesa";
                break;
            case 3:
                mostrarPrecio("img/perro.png", "Hot Dog", "4.500");
                document.getElementById("miInput").value = "Hotdog";
                break;
            case 4:
                mostrarPrecio("img/ensalada.png", "Ensalada", "5.000");
                document.getElementById("miInput").value = "Ensalada";
                break;
            default:
                console.log("Seleccione una opción válida.");
        }
    });
}
