let numero1 = parseInt(prompt("Ingrese un número 1:"));
let numero2 = parseInt(prompt("Ingrese un número 2:"));
let numero3 = parseInt(prompt("Ingrese un número 3:"));


let numGuardado = [numero1, numero2, numero3];

// Numero Mayor

let numMayor; 

if (numGuardado[0] >= numGuardado[1] && numGuardado[0] >= numGuardado[2]){
   numMayor= numGuardado[0]
}else if(numGuardado[1] >= numGuardado[0] && numGuardado[1] >= numGuardado[2]){
    numMayor= numGuardado[1]
} else{
    numMayor= numGuardado[2]
}

// // Numero Menor

let numMenor

if (numGuardado[0] <= numGuardado[1] && numGuardado[0] <= numGuardado[2]){
    numMenor= numGuardado[0]
}else if(numGuardado[1] <= numGuardado[0] && numGuardado[1] <= numGuardado[2]){
    numMenor= numGuardado[1]
} else{
    numMenor= numGuardado[2]
}

// // Numero del Centro



let numCentro;

if (numero1 !== numMayor && numero1 !== numMenor) {
    if (numero1 !== numero2 || numero1 !== numero3) {
        numCentro = numero1;
    } else {
        numCentro = numero3; 
    }
} else if (numero2 !== numMayor && numero2 !== numMenor) {
    if (numero2 !== numero1 || numero2 !== numero3) {
        numCentro = numero2;
    } else {
        numCentro = numero3; 
    }
} else {
    numCentro = numero1; 
}

// //Numeros Iguales 

let numIguales
let mensaje

if (numGuardado[0] === numGuardado[1]) {
    numIguales = numGuardado[0];
    mensaje = "El número " + numIguales + " se repite en las posiciones 1 y 2.";
} else if (numGuardado[0] === numGuardado[2]) {
    numIguales = numGuardado[0];
    mensaje = "El número " + numIguales + " se repite en las posiciones 1 y 3.";
} else if (numGuardado[1] === numGuardado[2]) {
    numIguales = numGuardado[1];
    mensaje = "El número " + numIguales + " se repite en las posiciones 2 y 3.";
} else {
    mensaje = "No hay números repetidos en el arreglo.";
}

console.log("El numero mayor ingresado es: " + numMayor)
console.log("el numero menor ingresado es: " + numMenor)
console.log("El numero que se ubica en el centro es: " + numCentro)
console.log("los numeros ordenados de mayor a menor son: "+numMayor,numCentro,numMenor)
console.log("los numeros ordenados de menor a mayor son: "+numMenor,numCentro,numMayor)
console.log(mensaje)



