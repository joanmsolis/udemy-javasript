// let juegos =['zelda','mario 3 ','mtron', 'chromo',['spiderman','hombre ara;a',2+1,true,function(){},()=>{}]];
// console.log({juegos});
let juegos =['zelda','mario 3 ','mtron', 'chromo'];

let primero = juegos[0];
let segundo = juegos[juegos.length - 1];

console.log({primero,segundo});

juegos.forEach((elemento, indice, array)=>{
    console.log(elemento,indice,array);
    
});
let nuevaLongitud = juegos.push('mortal-comba');
console.log(nuevaLongitud, juegos);
nuevaLongitud = juegos.unshift('x-men');
console.log(nuevaLongitud, juegos);

let borrarJuego = juegos.pop();
console.log(borrarJuego, juegos);