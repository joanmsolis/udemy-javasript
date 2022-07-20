

const heroes = ['Superman', 'Batman', 'Mujer Maravilla', 'Aquaman','Robbin'];
console.log('los super heroes: ');
for(let y = 0; y < 5; y++){
    console.log(heroes[y]);

}

console.warn('for in');

for(let i in heroes){
    console.log(heroes[i]);
}

console.warn('for of')

for(let heroe of heroes){
    console.log(heroe);
}
console.warn("for con objetos");

const matricula = {
    nombre: 'joan',
    apellido: 'solis',
    cedula: '001-212222-5',
    tel: '809-221-9896',
    direcion: 'zona colonial'

}
 for(let metricul in matricula){
    console.log( matricula[metricul]);
 }

 