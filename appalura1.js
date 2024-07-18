let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Ingresa un numero del 1 al 50'; //esto es igual a la funcion asignarTextoElemento
let numeroSecreto = 0;
let intentos = 0;
let numeroSorteado = [];
let numeroMaximo = 10;
// function intentoUsuario() {
    // alert('click desde la funcion');
// }

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    //console.log(`llevas ${intentos} intentos`);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario == numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1)? 'vez': 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    //alert('perfecto le acertastes al numero');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
    }

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //accedo con queryselector
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    //document.getElementById('valorUsuario').value = " "; //otra forma de hacer el vacio de la caja
}


function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(numeroSorteado);
    //si ya sorteamos todos los numeros
    if (numeroSorteado.length === numeroMaximo) {
        //generar un nuevo array de numeros
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    } else {

    //si el numero generado esta incluido en la lista
    if (numeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        numeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto!!!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${ numeroMaximo}!! GENIO`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
//asignarTextoElemento('button', 'Intentar', intentoUsuario);
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    //limpiar la caja
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    //deshabilitar el boton de intentar inicilizar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();

// function hola() {
//     console.log("Hola mundo!!!");
// }

// hola();

// function nombre(nombre){
//     console.log('Hola ' + nombre);
//     console.log(`Hola ${nombre}`);
// }

// nombre('Dario');

// function numero(num) {
//    num = num * 2;
//    console.log(`El numero es: ${num}`);
//    return num *2
// }
// let doble = numero(4);
// console.log('el doble es: ', doble);
// numero(5)

// function numbers(n1, n2, n3) {
//     prom = (n1 + n2 + n3) / 3;
//     console.log(`El promedio es: ${prom}`);
// }

// numbers(3, 5, 7);

// function mayorMenor(n1, n2) {
//     if (n1 > n2) {
//         console.log(`El numero mayor es: ${n1}`
//         );
//     } else {
//         console.log(`El numero mayor es: ${n2}`
//             );
//     }
// }

// mayorMenor(6, 12);

// function multi(num) {
//     resultado = num * num;
//     console.log(`El resultado es: ${resultado}`);
// }
// multi(5);

// //INDICE DE MASA CORPORAL

// function imc(peso, altura) {
//     imc = peso / (altura * altura);
//     console.log(`El indice de masa corporal es: ${imc}`
//     );
//     }
// imc(83, 1.83);

// function fact(num) {
//     if (num == 0) {
//         return 1;
//     } else {
//         return num * fact(num - 1);
//     }
// }

// console.log(fact(5));


// function tablaMultiplicar(numero) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${numero} x ${i} = ${numero * i}`
//         );
//         }
// }

// tablaMultiplicar(5);

//let listaGenerica = [];

// let listaLenguajes = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// listaLenguajes.push('Java', 'Ruby', 'GoLang');

// function mostrarLenguajes() {
// console.log(listaLenguajes);
// }
// mostrarLenguajes();

// function mostrarLenguagesSeparadamente() {
//   for (let i = 0; i < listaLenguajes.length; i++) {
//     console.log(listaLenguajes[i]);
//   }
// }
// mostrarLenguagesSeparadamente();


// function mostrarAlreves() {
// console.log(listaLenguajes.reverse());
// }
// mostrarAlreves();

// function mostrarLenguagesReversoSeparadamente() {
//     for (let i = listaLenguajes.length - 1; i >= 0; i--) {
//     console.log(listaLenguajes[i]);
//   }
// }
// mostrarLenguagesReversoSeparadamente();

// function encontrarMayorMenor(lista) {
//   let mayor = lista[0];
//   let menor = lista[0];

//   for (let i = 1; i < lista.length; i++) {
//     if (lista[i] > mayor) {
//       mayor = lista[i];
//     }
//     if (lista[i] < menor) {
//       menor = lista[i];
//     }
//   }

//   console.log("Mayor:", mayor);
//   console.log("Menor:", menor);
// }

// let numeros = [15, 8, 25, 5, 12];
// encontrarMayorMenor(numeros);