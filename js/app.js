let a = 10;
var b = 15;
const c =20;
let x = a + b;
let z = 'esto fue un error';
console.log(a,b,c);
console.warn(x);
console.error(z);
console.table({a, b, c, x, z});


 let nombre = prompt('cual es tu nombre');
 

if(nombre === ''){
    alert('el campo nombre esta vacio, gracias');
    
}else{
    confirm('es valido, seguro que quiere continuar');

}