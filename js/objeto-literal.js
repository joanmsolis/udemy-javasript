const personaje ={
    nombre : 'joan solis',
    nickName : 'el fuerte',
    edad : 23,
    vivo : true,
    coords:{
        lat: 34.12,
        long: 118.90,
    },
    idioma: ['espa;ol','inglesh','italiano'],
};
console.log('nombre: ', personaje.nombre);
console.log('edad: ',personaje.edad);

console.log('cordenada', personaje.coords);
console.log('idioma que hablas:',personaje.idioma[personaje.idioma.length-1]);
 const x = 'vivo';
 console.log('vivo',personaje[x]);
 
 delete personaje.edad;
 console.log(personaje);

 personaje.casado = true;
   

 const entriPares = Object.entries(personaje);
 console.log(entriPares);