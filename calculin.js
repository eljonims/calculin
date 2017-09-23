
var respuesta = [];
var factores = [];
var solucion;


function nuevoProducto(){
	factores[0] = Math.floor(10 * Math.random());
	factores[1] = Math.floor(10 * Math.random());
	respuesta =[];
	solucion = factores[0]*factores[1];
	document.getElementById("pregunta").innerHTML=factores.join(" * ");
	document.getElementById("respuesta").innerHTML=['😐','😒','😔','😶'][Math.floor(4* Math.random())];	
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
			setTimeout(bravo,0);
		}else{
			if( solucion < 9 || respuesta.length > 1){
				setTimeout(tomatazo,0);
			}
		}		
	}		
}
function bravo(){
	setTimeout(nuevoProducto,700);
	document.getElementById("respuesta").innerHTML=['😁','😂','😃','😄','😅','😆','😇','😉','😊','😋','😌','😎','😍','😏','😘','😚'][Math.floor( 16 * Math.random())];
}
function tomatazo(){
	setTimeout(nuevoProducto,700);
	document.getElementById("respuesta").innerHTML=['😖','😝','😞','😠','😡','😢','😣','😥,','😨','😩','😪','😫','😭','😰','😱','😲','😳','😵'][Math.floor(18* Math.random())];;
	//"😖😝😞😠😡😢😣😥😨😩😪😫😭😰😱😲😳😵"
}
