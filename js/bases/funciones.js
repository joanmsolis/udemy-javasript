// function saludar (nombre){
//     console.log(arguments);
//     console.log("saludo, "+nombre);
//     return 1;
//     console.log('soy un codigo que esta depues del retorno');
// }
// const saludar2 = function(nombre){
//     console.log('hola '+nombre);
// }

// const saludarFlecha =()=>{
//     console.log('buenas soy una funcion de flecha');
// }

// const saludarFlecha2 = nombre =>{
//     console.log('hola '+nombre);
// }
// const retornarSaludar = saludar('fernado', 40, true, 'Rep Dom'); 
// console.log({retornarSaludar});
// saludar2('fernado');
// saludarFlecha();
// saludarFlecha2('melisa');
const saludar = (a,b) => a + b ;

let aleatorio =() => Math.random();



console.log(aleatorio())