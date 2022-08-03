
let deck            = [];
const tipos         = ['H','C','S','D'];
const cartasSuperior  = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//pasar por referencia btn
const btnPedir             = document.querySelector('#btnPedir');
const btnDetener           = document.querySelector('#btnDetener');
const btnNuevo           = document.querySelector('#btnNuevo');


const HtmlPuntos           = document.querySelectorAll('small')
const divCartaJugador      = document.querySelector("#jugador-cartas");
const divCartaComputadora  = document.querySelector("#computadora-cartas")


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
console.log(deck);
return deck;

}
crearDeck();

// esta funcion me permite pedir una carta
const pedirCarta =() =>{

    if(deck.length === 0){
        throw 'no hay carta en la pila '
    }

    const carta =  deck.pop();


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
const turnoCoputadora = (puntosMinimos) =>{
     do{
        const carta = pedirCarta();


        puntosComputadora = puntosComputadora + valorcarta(carta);
        HtmlPuntos[1].innerText = puntosComputadora
        
        const crearImg = document.createElement('img');
        crearImg.src = `img/cartas/${ carta }.png`;
        crearImg.classList.add('cartas');
        
        divCartaComputadora.append(crearImg);
        if(puntosMinimos > 21){
            break;
        }
 

     }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

     setTimeout(() => {
     if(puntosComputadora === puntosMinimos){
        alert('nadie gana :(');
        }else if(puntosMinimos > 21){
            alert('la computadora gana')
        }else if(puntosComputadora > 21){
            alert('el jugador gana');
        }else{
            alert('computadora gana');
        }
}, 20 );
}

  


   //eventos
   btnPedir.addEventListener('click',()=>{
   const carta = pedirCarta();


puntosJugador = puntosJugador + valorcarta(carta);

HtmlPuntos[0].innerText = puntosJugador;

const crearImg = document.createElement('img');
crearImg.src = `img/cartas/${ carta }.png`;
crearImg.classList.add('cartas');

divCartaJugador.append(crearImg);

if(puntosJugador > 21){
    console.warn('lo siento mucho, perdiste');
    btnPedir.disabled = true;
    turnoCoputadora(puntosJugador);

}else if (puntosJugador === 21){
    console.warn('genial ganaste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
}


   });
btnDetener.addEventListener('click',()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    
    turnoCoputadora(puntosJugador);


})
btnNuevo.addEventListener('click', ()=>{
    console.clear();
    deck = [];
    deck = crearDeck();
 
    puntosJugador     = 0;
    puntosComputadora = 0;
    
    HtmlPuntos[0].innerText = 0;
    HtmlPuntos[1].innerText = 0;

    divCartaComputadora.innerHTML = '';
    divCartaJugador.innerHTML  = '';

    btnDetener.disabled = false;
    btnPedir.disabled = false;

})


