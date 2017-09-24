
var respuesta = [];
var factores = [];
var solucion;
var respuestaCompletada;
var tiempo = 3000;

function nuevoProducto(){

	respuestaCompletada = false;
	respuesta =[];
	document.getElementById("respuesta").innerHTML=['😐','😒','😶'][Math.floor(3* Math.random())];
	
	factores[0] = Math.floor(10 * Math.random());
	factores[1] = Math.floor(10 * Math.random());
	solucion = factores[0]*factores[1];
	document.getElementById("pregunta").innerHTML=factores.join(" * ");
	
	setTimeout(timeout,tiempo);
	
}

window.addEventListener("load",nuevoProducto);


function tecla( cual )
{
	if (cual < 0 ){
		if (respuesta.length > 0){
			respuesta.pop();
			document.getElementById("respuesta").innerHTML=respuesta.join("");
		}
	}else{
		respuesta.push(cual);
		document.getElementById("respuesta").innerHTML=respuesta.join("");
		
		if( solucion == Number.parseInt(respuesta.join(""))){
			respuestaCompletada = true;
			setTimeout(bravo,500);
			
		}else{
			if( solucion < 9 || respuesta.length > 1){
				respuestaCompletada = true;
				setTimeout(tomatazo,500);
			}
		}		
	}		
}
function timeout(){
	if(!respuestaCompletada){
		setTimeout(nuevoProducto,700);
		document.getElementById("pregunta").innerHTML="L E N T O";
		document.getElementById("respuesta").innerHTML='😱';
	}
	
}
function bravo(){
	setTimeout(nuevoProducto,700);
	document.getElementById("pregunta").innerHTML="B I E N";
	document.getElementById("respuesta").innerHTML=['😁','😂','😃','😄','😅','😆','😇','😉','😊','😋','😌','😎','😍','😏','😘','😚'][Math.floor( 16 * Math.random())];
}
function tomatazo(){
	setTimeout(nuevoProducto,700);
	document.getElementById("pregunta").innerHTML="M A L";
	document.getElementById("respuesta").innerHTML=['😔','😖','😝','😞','😠','😡','😢','😣','😥','😨','😩','😪','😫','😭','😰','😲','😳','😵'][Math.floor(18* Math.random())];;
	//"😖😝😞😠😡😢😣😥😨😩😪😫😭😰😱😲😳😵"
}
