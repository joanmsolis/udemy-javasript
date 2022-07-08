const dia = 1;
const horaActual = 11;

let horaDeApertura;
let mensaje;

// if( dia == 0 ||dia == 6 ){

// if([0,6].includes(dia)){
//     console.log('fin de semana');
//     horaDeApertura = 9;
// }else{
//     console.log('dia de semana ');
//     horaDeApertura = 11;
// }

horaDeApertura =([0,6].includes(dia)) ? 9 : 11;


// if(horaActual >= horaDeApertura){
//     mensaje = 'esta abierto ';
// }else{
//     mensaje = `todavia esta cerrado hoy habrimos a las: ${horaDeApertura}`; 
// }
// console.log(horaDeApertura, mensaje);

mensaje = ([horaActual >= horaDeApertura]) ? 'esta abierto ' :  `todavia esta cerrado hoy habrimos a las: ${horaDeApertura}`; 

console.log(horaDeApertura, mensaje);