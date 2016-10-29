var jugador;
var aleatorio;
var compu;

var jugador = prompt ("Escoje: piedra, papel o tijeras");
var aleatorio = Math.round((Math.random()*3)+1);

if (aleatorio==1){
	compu="piedra";
} else if(aleatorio==2){
	compu="papel";
}else if(aleatorio==3){
	compu="tijeras";
}

console.log("Jugador escogió " + jugador);
console.log("Compu escogió " + compu);

if(jugador==compu){
	console.log("Es un Empate");
}

if(jugador=="piedra"&&compu=="papel"){
	console.log("Compu Gana");
}

if(jugador=="papel"&&compu=="tijeras"){
	console.log("Compu Gana");
}

if(jugador=="tijeras"&&compu=="piedra"){
	console.log("Compu Gana");
}

if(jugador=="papel"&&compu=="piedra"){
	console.log("Jugador Gana");
}

if(jugador=="tijeras"&&compu=="papel"){
	console.log("Jugador Gana");
}

if(jugador=="piedra"&&compu=="tijeras"){
	console.log("Jugador Gana");
}
