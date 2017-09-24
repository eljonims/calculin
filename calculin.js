
var timeout;
var respuesta;
var factores=[];
var solucion;
var tiempo = 3000;
var nuevoProductoProgramado;
window.alert("versión 1.0.1");
var aceptarMasEntrada = false;
function nuevoProducto(){
	
	
	factores[0] = Math.floor(10 * Math.random());
	factores[1] = Math.floor(10 * Math.random());
	solucion = Array.from("" + factores[0]*factores[1]);
	document.getElementById("pregunta").innerHTML=factores.join(" * ");
	
	respuesta =[];
	document.getElementById("respuesta").innerHTML=['😐','😒','😶'][Math.floor(3* Math.random())];
	
	aceptarMasEntrada = true;
	
	timeout = setTimeout(timeoutFn,2000);
}

window.addEventListener("load",nuevoProducto);


function tecla( cual ){

	if(!aceptarMasEntrada){
		return;
	}
	aceptarMasEntrada = false; //se interrumpe la entrada de digitos con cada
				//tecla pulsada. si la respuesta va construyendo correctamente se permite
				//completarla
	respuesta.push(cual);
	document.getElementById("respuesta").innerHTML=respuesta.join("");
	
	if(respuesta.some((v,i)=>solucion[i]!=v)){//en cuanto hay un digito que no coincide la respuesta es incorrecta
		clearTimeout(timeout);
		setTimeout(tomatazo,500);
	}else{ //todos los digitos introducidos son correctos hasta ahora
		if(respuesta.length == solucion.length){//solucion completa
			clearTimeout(timeout);
			setTimeout(bravo,500);
		}else{//solucion parcial
			aceptarMasEntrada = true; //se puede completar la respuesta
		}
	}
}
function timeoutFn(){
	aceptarMasEntrada = false;
	nuevoProductoProgramado = setTimeout(nuevoProducto,700);
	document.getElementById("pregunta").innerHTML="L E N T O";
	document.getElementById("respuesta").innerHTML='😱';
	
}
function bravo(){
	nuevoProductoProgramado = setTimeout(nuevoProducto,700);
	document.getElementById("pregunta").innerHTML="B I E N";
	document.getElementById("respuesta").innerHTML=['😁','😂','😃','😄','😅','😆','😇','😉','😊','😋','😌','😎','😍','😏','😘','😚'][Math.floor( 16 * Math.random())];
}
function tomatazo(){
	nuevoProductoProgramado = setTimeout(nuevoProducto,700);
	document.getElementById("pregunta").innerHTML="M A L";
	document.getElementById("respuesta").innerHTML=['😔','😖','😝','😞','😠','😡','😢','😣','😥','😨','😩','😪','😫','😭','😰','😲','😳','😵'][Math.floor(18* Math.random())];;
	//"😖😝😞😠😡😢😣😥😨😩😪😫😭😰😱😲😳😵"
}
