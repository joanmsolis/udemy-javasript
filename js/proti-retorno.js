function crearPersona(nombre,apellido){
    return{
    nombre,
    apellido:apellido
    }
}

const persona = crearPersona('joan', 'solis');
console.log(persona);