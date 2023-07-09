// //Actividad 1, crear 3 variables para nombre, apellido y edad

// let nombre1 = "Bart";
// let apellido1= "simpson";
// let edad = 55;
// console.log(nombre);
// console.log(apellido);
// console.log(edad);

// //Actividad 2 Declarar 5 variables constantes

// const ciudad11 = "Alabama";
// const ciudad2 = "Shelbiville";
// const ciudad3 = "Buenos Aires";
// const ciudad4 = "Gerli";
// const ciudad5 = "Avellaneda";
// console.log(ciudad11);
// console.log(ciudad2);
// console.log(ciudad3);
// console.log(ciudad4);
// console.log(ciudad5);


// // Actividad 3 Declarar variables para un carnet de conducir

// const numeroLicencia = "b47u89re243";
// let nombre = "Bart";
// let apellido ="Simpson";
// let direccion = "742 evergreen terr, sprinfield usa";
// let fechaDeNacimiento = "02/11/70";
// let sexo = "M";
// let carnet = "Numero de licencia:"  +numeroLicencia+ " " +
//              "Nombre: " +nombre+ " " + "Apellido:" +apellido+ " "+
//               "Sexo:" +sexo;
// console.log(carnet);

// // act 4 Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta

// let nombreIngresado1 = prompt("ingrese el primer nombre: ");
// let nombreIngresado2 = prompt("ingrese el segundo nombre: ");
// let nombreIngresado3 = prompt("ingrese el tercer nombre: ");
// let nombreIngresado4 = prompt("ingrese el cuarto nombre: ");
// let nombreIngresado5 = prompt("ingrese el quinto nombre: ");

// let listaNombres = (nombreIngresado1 +" "+ nombreIngresado2 +" "+ nombreIngresado3 +" "+ nombreIngresado4 +" "+ nombreIngresado5);
// alert(listaNombres);

// // Act 5 Solicitar al usuario uno o más precios.Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

// let precio1 = parseInt(prompt("ingrese su primer precio: "));
// let precio2 = parseInt(prompt("ingrese su segundo precio: "));
// let precio3 = parseInt(prompt("ingrese su tercer precio: "));

// let descuento = ((precio1 + precio2 + precio3) * 0.3);
// let precioTotal = (precio1 + precio2 + precio3) - (descuento);
// console.log(descuento); //descuento
// console.log(precioTotal); // precio a abonar.



//-----------------------------------------------------------------------------



//CLASE 2:
//Solicitar al usuario un (1) nombre. Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
// Caso contrario, la salida será “Yo no fui”.

// let nombre = (prompt("ingrese un nombre: "));
// let registro = "julian"; //DEBO DECLARAR LA VARIABLE, sino se ejecuta solo el else:
// if (registro == nombre ){
//     alert("fui yo");
// }
// else{
//     alert("Yo no fui");
// }; 

//-----------------------------------------------------------------------------



//  Solicitar al usuario una (1) tecla. Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”

// let ingreseUnaTecla = prompt("ingrese una tecla");


// if ((ingreseUnaTecla == "Y" ) || (ingreseUnaTecla == "y")) {  //Si no el numero ingresado no es igual a "Y"; || (o) el numero ingresado no es igual a "y"
//     alert("Correcto");
// } else{
//     alert("Error");
// };


//-----------------------------------------------------------------------------




// // SOLICITAR AL USUARIO UN NUMERO: 
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4.

// let ingresoNumero = prompt("ingrese un numero, entre 1 y 4: ");

// if (ingresoNumero == "1") {
//     alert("elegiste a Homero");
// } else if (ingresoNumero == "2"){
//     alert("elegiste a marge");
// } else if (ingresoNumero == "3"){
//     alert("elegiste a bart");
// } else if (ingresoNumero == "4") {
//     alert("elegiste a lisa");
// } else {
//     alert("No ingreso un numero entre 1 y 4");
// };


//-----------------------------------------------------------------------------



// //Solicitar al usuario un (1) número.
// Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000.

// let numero = parseFloat(prompt("ingrese un numero: "));

// if ((numero >= 0) && (numero < 1000)) {
//     alert("presupuesto bajo");
// } else if ((numero >= 1001) && (numero <= 3000)) {
//     alert("presupuesto medio");
// } else if ( numero > 3001) {
//     alert("presupuesto alto");
// } else {
//     alert("ingrese un numero")
// }



//-----------------------------------------------------------------------------



// //Solicitar al usuario cuatro (4) productos de almacén. 
// Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. 
// Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

// let producto1 = prompt("ingrese un producto: ");
// let producto2 = prompt("ingrese el segundo producto: ");
// let producto3 = prompt("ingrese el tercer producto: ");
// let producto4 = prompt("ingrese el cuarto producto:");

// if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
//     alert(producto1 + " "+ producto2 +" "+ producto3 +" "+ producto4);
// } else {
//     alert("ingrese cuatro productos de supermercado");
// }



//-----------------------------------------------------------------------------



//Solicitar al usuario un (1) un número y un (1) texto.
//  Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

// let numero = parseInt(prompt("ingrese el numero que quiera que se repita el mensaje: "))
// let nombre = prompt("ingrese un nombre")

// for ( index = 0  ; index < numero ; index++ ) {
//     alert("su nombre es: "+ nombre + " " + "y se repetira: " + numero + " "+ " de veces");
// }


//-----------------------------------------------------------------------------


// // Solicitar al usuario un (1) número. 
// Emplear este valor para determinar la cantidad de repeticiones, 
// y efectuar una salida por alerta con el mensaje “lado” en cada repetición. 
// Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

// let lados = parseInt(prompt("ingrese un numero:"))

// for ( i = 1; i < lados ; i++){
//     if (i > 3);{
//         break
//     }
//     alert("lado: ");
// }


//-----------------------------------------------------------------------------

// Resolucion:
// let lados = prompt('INGRESAR CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
//     if (index > 3) {
//         break;
//     }
//     alert("lado");
// }

//-----------------------------------------------------------------------------
// Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
// Luego realizar un única salida por alerta, con el listado de alumnos registrados.

//  let dato = prompt("ingrese el nombre del alumno o ingrese 0, para salir: ")

//  for ( let index = 0 ; index < 9 ; index++ ){
//      dato += prompt("ingrese el nombre del alumno o ingrese 0, para salir: ") + "\n";
//     }
//     alert(dato);

// ---------------------------------------------------
// OTRA FORMA DE RESOLVERLO, DECLARAR UNA VARIABLE Y PONER EL PROMPT DEBAJO DEL FOR

// let dato = " ";

// for ( let index = 0 ; index < 9 ; index++ ){
//     dato += prompt("ingrese el nombre del alumno o ingrese 0, para salir: ") + "\n"; 
// }
// alert(dato);

//-----------------------------------------------------------------------------

// Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
// Luego realizar un única salida por alerta, con todos los nombres ingresados


// let nombre = prompt("ingrese un nombre: ")

// while (nombre != "voldemort") {
//     nombre = prompt("ingrese un nombre: ");
// } alert("Has ingresado: "+ " " + nombre + " "+ "el ciclo termino");

//-----------------------------------------------------------------------------

//Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. 
// Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.

let numero = (prompt("ingrese un numero, del 1 al 4:  "))

while (numero != "ESC") {
    switch (numero) {
        case "1":
            alert("el numero 1 es el tomate") ;
            break;
        case "2":
            alert("el numero 2 es Papa");
            break;
        case "3":
            alert("El numero 3 es carne ");
            break;
        case "4":
            alert("el numero 4 es pollo");
            break;
        default:
            alert("ingrese un numero del 1 al 4 o ESC para salir: ");
            break;
        }
        numero = (prompt("ingrese un numero, del 1 al 4:  "));
}
