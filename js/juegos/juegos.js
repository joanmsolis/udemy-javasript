
let deck            = [];
const tipos         = ['H','C','S','D'];
const cartasSuperior  = ['A','J','Q','K'];
// esta funcion crea una nueva baraja
const crearDeck = () =>{
    
for(let i = 2; i <= 10; i++){
    for(tipo of tipos){
        deck.push(i + tipo)

    }
}
for(let tipo of tipos){
 for(let esp  of cartasSuperior){
    deck.push(esp + tipo)
 }
}
// console.log(deck)
deck = _.shuffle( deck );
console.log( deck);
}
crearDeck();

// esta funcion me permite pedir una carta
const pedirCarta =() =>{

    if(deck.length === 0){
        throw 'no hay carta en la pila '
    }

    const carta =  deck.pop();

    console.log(deck);
    console.log(carta);
    return carta
}

    // pedirCarta();
    const valorcarta = (carta) =>{

        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ? 
                 (valor === 'A' ) ? 11 : 10
                 : valor * 1;
        // let punto = 0;

        // if(isNaN(valor)){
        //    punto = (valor ===  'A')? 11 : 10;
        // }else{
        //     punto = valor * 1;
        // }
        // console.log(punto);
   

    }
   const valor = valorcarta('5D')
   console.log({valor});

