// 1. Ejercicio de push() y pop()
console.log("1. Ejercicio de push() y pop():");
let menu1 = [];
menu1.push("Pizza", "Hamburguesa", "Ensalada");
console.log("Array después de push:", menu1); 
menu1.pop();  
console.log("Array después de pop:", menu1); 

// 2. Ejercicio de unshift() y shift()
console.log("\n2. Ejercicio de unshift() y shift():");
let menu2 = ["Sopa", "Arroz", "Pollo"];
console.log("Agregar 3 Elementos", menu2);
menu2.unshift("Pan", "Fruta");
console.log("Array después de unshift(agregando 2):", menu2);
menu2.shift();
console.log("Array después de shift:", menu2);

// 3. Ejercicio de concat()
console.log("\n3. Ejercicio de concat():");
let entradas = ["Tacos", "Quesadilla", "Guacamole"];
console.log("Entradas", entradas);
let bebidas = ["Cerveza", "Agua", "Jugo"];
console.log("Bebidas", bebidas);
let menuCompleto = entradas.concat(bebidas);
console.log("Array después de concat:", menuCompleto);

// 4. Ejercicio de slice()
console.log("\n4. Ejercicio de slice():");
let menu4 = ["Tortilla", "Pasta", "Papas Fritas", "Sándwich", "Helado"];
console.log("Array 5 ", menu4);
let subMenu = menu4.slice(1, 4);
console.log("Sub-array obtenido con slice:", subMenu);

// 5. Ejercicio de splice()
console.log("\n5. Ejercicio de splice():");
let menu5 = ["Tostadas", "Empanadas", "Sushi", "Té", "Pastel"];
console.log("Array5", menu5);
menu5.splice(2, 2, 'a', 'b');
console.log("Array después de splice:", menu5);

// 6. Ejercicio de indexOf() y lastIndexOf()
console.log("\n6. Ejercicio de indexOf() y lastIndexOf():");

let menu6 = ["Helado", "Pizza", "Helado", "Tarta", "Pizza"];
console.log("Array6", menu6);
let primeraPizza = menu6.indexOf("Pizza"); // 
console.log("Primera aparición de 'Pizza':", primeraPizza);

let ultimaPizza = menu6.lastIndexOf("Pizza"); // 
console.log("Última aparición de 'Pizza':", ultimaPizza);

let primeraHelado = menu6.indexOf("Helado"); // 
console.log("Primera aparición de 'Helado':",primeraHelado);

let ultimaHelado = menu6.lastIndexOf("Helado"); // 
console.log("Última aparición de 'Helado':", ultimaHelado);