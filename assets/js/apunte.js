//STRING CADENA DE TEXTO

let palabra = "5"

/* console.log(palabra + palabra) */

//Integer o Number ( PODEMOS REALIZAR OPERACIONES MATEMATICAS )

let numero = 5

/* console.log(numero + numero) */

// Array

let personajesDeLosSimpsons = ["Homero", "Moe", "Lisa", "Maggie", "Bart", "Milhouse",]

/* console.log(personajesDeLosSimpsons) */

// Objetos

let alumnos = [
    {
    nombre: "Alejandro",
    edad: 27,
    altura: 176
    },
    {
    nombre: "Bruno",
    edad: 20,
    altura: 182
    },
    {
        nombre: "Mauro",
        edad: 20,
        altura: 184
    },
]

let alumnosFiltrados = alumnos.filter((alumno) => alumno.edad > 20)

// -----------------------     FUNCIONES         -----------------------------------------

function boliche(nombre,edad,vip){
    //HACER UNA FUNCION QUE NOS PERMITA INGRESAR 3 DATOS MEDIANTE PARAMETROS, QUE NOS DIGA SI UNA PERSONA ESTA CAPACITADA PARA ENTRAR AL BOLICHE Y SI TIENE PASE VIP
    // CONDICION  = +18 EDAD

    if(edad >= 18){
        if(vip){
            return console.log(`${nombre} puede ingresar al boliche y tiene vip`)
        } 
        console.log(`${nombre} puede ingresar al boliche`)
    }
    else{
        console.log(`${nombre} no puede ingresar al boliche porque tiene ${edad} años`)
    }

}

/* boliche('Pablo', 34, true)
boliche('Mauro', 20, false)
boliche('Silvina', 30, true)
boliche('Gabriel',12,false) */

function suma(numero1,numero2){
    return numero1 + numero2
}

let suma1 = suma(10,5)
let suma2 = suma(20,5)
let suma3 = suma(10,8)
let suma4 = suma(10,50)

/* console.log(suma1)
console.log(suma2)
console.log(suma3)
console.log(suma4) */

// LAS FUNCIONES SE DECLARAN ( function nombreDeLaFuncion( PARAMETRO O PARAMETROS ){} ) y luego se llaman para que funcionen ( nombreDeLaFuncion( ARGUMENTO O ARGUNMENTOS) )

// IF =>    SI SE CUMPLE ESTA CONDICION VA A PASAR ESTO

// ELSE IF => SI NO SE CUMPLIO EL IF Y SE CUMPLE ESTA CONDICION VA A PASAR ESTO

// ELSE => SI NO SE CUMPLIO NINGUNA DE LAS CONDICIONES PARA TODO EL RESTO VA A PASAR ESTO

//                        CICLOS

// FOR

// FOR IN

// FOR OF

// WHILE

// DO WHILE


// EL CICLO FOR TIENE 3 ETAPAS DE DECLARACION ↓
// LA PRIMERA SE CREA LA VARIABLE DONDE SE VA A ALMACENAR EL DATO CADA VUELTA
// LA SEGUNDA SE PONE LA CONDICION
// LA TERCERA SE LE DICE QUE CADA VUELTA VA A AUMENTAR +1 SU VALOR

let personajesDeLosSimpsons2 = ["Homero", "Moe", "Lisa", "Maggie", "Bart", "Milhouse",]

/* console.log(personajesDeLosSimpsons2.length) */

/* for(let i = 0; i < 10;i++){
    console.log(`el numero es igual a ${i}`) 
} */

/* for(let i = 0; i < personajesDeLosSimpsons2.length;i++){
    console.log(`el personaje de la vuelta numero ${i} es : ${personajesDeLosSimpsons2[i]}`) 
} */


//                      FOR IN Y FOR OF

let personajesDeLosSimpsons3 = ["Homero", "Moe", "Lisa", "Maggie", "Bart", "Milhouse",]


// EL CICLO FOR TIENE 2 ETAPAS DE DECLARACION ↓
// LA PRIMERA SE CREA LA VARIABLE DONDE SE VA A ALMACENAR EL DATO CADA VUELTA
// LA SEGUNDA ES EL ARRAY QUE VA A RECORRER

// FOR IN RECORRE EL ARRAY Y DEVUELVE LAS POSICIONES DE LOS ELEMENTOS 
// SIRVE PARA ARRAYS Y PARA OBJETOS

/* for(let personaje in personajesDeLosSimpsons3){
    console.log(`el personaje es ${personaje}`)
} */

// FOR OF RECORRE EL ARRAY Y DEVUELVE EL ELEMENTO
// SIRVE SOLO PARA ARRAYS


/* for(let personaje of personajesDeLosSimpsons3){
    console.log(`el personaje es ${personaje}`)
}
 */
