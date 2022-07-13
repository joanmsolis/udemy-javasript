let a = 10;
let b = a;
a = 30;
  
console.log({a,b});

let juan = {nombre:'juan'}
let ana = {...juan};
ana.nombre = 'ana'

console.log({ana,juan});


const cambiaNombre =({...persona})=>{
    persona.nombre ='tonny';
    return persona;
    
}

let peter = {nombre: 'peter'};
let tonny = cambiaNombre(peter);

console.log({peter, tonny});

//arreglos

let frutas =['pera', 'manzana', 'mango'];

console.time('slice');
let otrasFrutas = frutas.slice;
console.timeEnd('slice');

otrasFrutas.push('gineo');

console.table({frutas, otrasFrutas});