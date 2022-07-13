/*function crearPersona(nombre,apellido){
    return{ nombre, apellido
    }
}
*/
let crearPersona = (nombre, apellido) =>{
    return {
        nombre,apellido
    }
}
const persona = crearPersona('joan', 'solis');
console.log(persona);

function imprimeArgumento(){
    console.log(arguments);

}

let imprimeArgumento2 = (...arguments) =>{

    console.log(arguments);
    return arguments;
}
const [edad,casado,hijo,nombre,saludo ]=imprimeArgumento2(10,true, false, 'joan', 'hola');
console.log({edad,casado,hijo,nombre,saludo});

const{apellido: nuevoApellido} = crearPersona('joan', 'solis');
console.log({nuevoApellido});

// const joan ={
//     nombre : 'joan solis',
//     nickName : 'el fuerte',
//     edad : 23,
//     vivo : true,
//     idioma: ['espa;ol','inglesh','italiano'],
// };

// const imprimePersonaje = (personaje)=>{
//     console.log('nombre',personaje.nombre);
//     console.log('nickName',personaje.nickName);
//     console.log('edad',personaje.edad);
//     console.log('vivo',personaje.vivo);
//     console.log('idioma',personaje.idioma);
// }
// const imprimePersonaje = ({nombre,nickName,edad = 15 ,vivo,idioma})=>{

//     console.log({nombre});
//     console.log({nickName});
//     console.log({edad});
//     console.log({vivo});
//     console.log({idioma});

// }

// imprimePersonaje(joan);

identidad = {
    nombreIdentida: 'carlos',
    apellidoIdentida: "ramires",
    cedula: "001-0012565-6",
    telefono: '809-221-3632',
    direcion: 'euclide morillo #56',
    provincia: 'santo domingo',
};
const imprimirIdentida = ({nombreIdentida,apellidoIdentida,cedula,telefono,direcion,provincia}) =>{
    console.log({nombreIdentida});
    console.log({apellidoIdentida});
    console.log({cedula});
    console.log({telefono});
    console.log({direcion});
    console.log({provincia});

}
imprimirIdentida(identidad);
 

const frutas = (pera,manzana)=>{
    return{
        pera,manzana
    }
}
const detallesFrutas = frutas('verde','roja')
console.log(detallesFrutas)
const {pera: guineo}= frutas('verdes','rojas')
console.log({guineo})
