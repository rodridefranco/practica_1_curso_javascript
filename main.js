//VARIABLES es un espacio de memoria dedicado a almacenar info importante

//DECLARACION, se declara cuando se le dice al sistema que haga determinada accion. Para esto se usan palabras reservadas:

// let cliente; 
//hasta este momento la variable no tiene ningun dato en su interior

//ASIGNACION DE VALORES
let cliente = "Carlos";
cliente = "Rodrigo"; // si comprobamos en la consola del navegador veremos que ahora aparece Rodrigo en vez de Carlos
console.log(cliente);

//INICIALIZAR VARIABLES, significa que le podes asignar un valor
let edad = 34
console.log(edad);


//CONSTANTES, es una variable cuyo valor no se puede modificar una vez que fue asignado. 

const nacimiento = 1990;

console.log(nacimiento);



const titulo = document.getElementById("titulo");

titulo.textContent = "Texto modificado"; //con esto se va a modificar el contenido del elemento (h1 en este caso, en vez de decir "Hola..." va a decir "Texto modificado")