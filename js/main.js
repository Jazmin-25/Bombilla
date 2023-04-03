const $cambiarInterruptor = document.getElementById("cambiarInterruptor");
let = $cambiarBombilla = document.getElementById("cambiarBombilla");
let = $interruptor = document.querySelector(".interruptor");

function cambiarImagenes(){
    if ($cambiarBombilla.src.match("./imagenes/encendido-1.png") && $cambiarInterruptor.src.match("./imagenes/on-or.png")){
        $cambiarBombilla.src = "./imagenes/apagado-1.png";
        $cambiarInterruptor.src = "./imagenes/off-or.png";
    }else{ 
        $cambiarBombilla.src = "./imagenes/encendido-1.png";
        $cambiarInterruptor.src = "./imagenes/on-or.png";
    } //la bombilla es prendida
}//encendido y apagado de bombilla
$interruptor.addEventListener("click",cambiarImagenes)//al hacer click cambiara la bombilla