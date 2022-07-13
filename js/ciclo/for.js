

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