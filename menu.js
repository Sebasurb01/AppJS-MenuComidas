
function mostrarMenu() {
    let mensajeMenu = " Menú:\n        \n1. Pizza   \n2. Hamburguesa \n3. Sushi  \n4. Tacos  \n Ingrese el numero de tu pedido";
    let seleccion = prompt(mensajeMenu);

   
    if (seleccion === null) {
        alert("Gracias por su visita");
    } else {
        
        seleccion = parseInt(seleccion);

       
        switch (seleccion) {
            case 1:
                alert("Tu pedido fue Pizza y tiene un costo de $10.000");
                break;
            case 2:
                alert("Tu pedido fue Hamburguesa y tiene un costo de $15.000");
                break;
            case 3:
                alert("Tu pedido fue Sushi y tiene un costo de $18.000");
                break;
            case 4:
                alert("Tu pedido fue Tacos y tiene un costo de $25.000");
                break;
            default:
                alert("El número seleccionado no está en el menú");
                break;
        }
    }
}


mostrarMenu();
