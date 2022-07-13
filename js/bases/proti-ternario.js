const elMayor = (a, b) => a > b ? a : b;
const tieneMenbresia = (mienbro) =>(mienbro)? '2 dolares' : '10 dolares';

console.log(elMayor(15,10));
console.log(tieneMenbresia(false));

const amigo = false;
const amigoArr =[
    'peter',
    'tonny',
    'DR. strange',
    amigo ? 'thor' : 'loki'
];

console.log( amigoArr);

const nota = 65;
const grado = nota >= 95 ? 'A+': nota >= 90  ? 'A' : nota >= 85 ? 'B+' : nota >= 80 ? 'B' : nota >= 75 ? 'C+' : nota >= 70 ? 'C' : 'F';

console.log({nota,grado});