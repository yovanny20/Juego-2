//===========================================
//Juego Piedra, Papel, Tijera, Lagarto o Spock

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3
var spock = 4;
var opciones = ["Piedra","Papel","Tijera","Lagarto","Spock"];

function aleatorio(min, max){
	var numero = Math.floor(Math.random()*(max - min + 1) + min);
	return numero;
}

function juego(opu, opm){
	var comp = opu+opm;
	if(opu == opm) alert("Empate!");
	else if(opu < opm){
		if(comp == 2 || comp == 3 || comp == 5 || comp == 7){
			if(opu == papel && opm == tijera) alert("Perdiste :(");
			else alert("Ganaste :)");
		}
		else alert("Perdiste :(");
	}
	else{
		if(comp == 2 || comp == 3 || comp == 5 || comp == 7){
			if(opu == tijera && opm == papel) alert("Ganaste :)");
			else alert("Perdiste :(");
		}
		else alert("Ganaste :)");
	}
}

var opcionUsuario = prompt("Que Empieze el Juego\n¿Que Eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4",0);
var cad = String(opcionUsuario).search(/^\d+$/); 
if(cad != -1){
		opcionUsuario = parseInt(opcionUsuario);
		if(opcionUsuario < 5){
			var opcionMaquina = aleatorio(0,4);
			alert("Elegiste "+opciones[opcionUsuario]);
			alert("JavaScript Eligio "+opciones[opcionMaquina]);
			juego(opcionUsuario,opcionMaquina);
		}
		else alert("Pos que Carajo Escribiste");
}
else alert("Pos que Carajo Escribiste");
