//console.log("hola mundo de javascript");

// let a = 'imprimir en consola';
//     b = "esto es para prevenir";
//     c = "esto es un error";
//     d = 25;
//     e = 30;
//     f = d + e;

// console.table({a,b,c});
// console.log(f);

let edad =[18,35,46,60]

edad.forEach(function (elemento,indice,array) {
    //console.log(elemento);
 
    if(elemento <= 18){
        console.log(elemento +" eres menor de edad");
    }else if(elemento <=35){
     console.log(elemento+" eren joven");
    }else if(elemento <= 46){
        console.log(elemento +" eres un adulto joven");
    }else {
        console.log(elemento+" ya esta viejo");
    }
})
