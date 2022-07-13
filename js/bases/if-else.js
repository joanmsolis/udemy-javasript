
let a = 15;

if(a > 10){
    console.log('el numero es mayo')

}else{
console.log('fin del programa');
}
const hoy = new Date();
let dia = hoy.getDate();

console.log({dia});

if (dia === 5){
    console.log('por fin es domingo');
}else{
    if(dia === 1){
        console.log('hoy es lune ya se trabaja');
    }else{
        console.log('ni es lune ni es domingo');
    }
}

// sin usar if else o switch , unicamente objetos
dia = 1;
 
const diaLetras ={
    0: 'domingo',
    1: 'lunes',
    2: 'marte',
    3: 'miercoles',
    4: 'jueve',
    5: 'vierne',
    6: 'sabado'
}

const diaLetras2 =['domingo', 'lunes','marte','miercoles','jueve','vierne','sabado'
]


console.log(diaLetras[dia] || 'ese dia no hiciste');
console.log(diaLetras2[0]);