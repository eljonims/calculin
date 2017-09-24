
//⚖☠♬♪⌬⌚⚙⟳
var timeout;
var respuesta;
var factores=[];
var solucion;
var tiempo = 3000;
var nuevoProductoProgramado;
window.alert("versión 1.0.2");
var aceptarMasEntrada = false;
var modo="normal";
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

	if(!aceptarMasEntrada || !(modo == "normal")){
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
function opciones(){
	modo = (modo == "normal")?"opciones":"normal";
	
	if( modo == "opciones"){
		clearTimeout(timeout);
		document.getElementById("pregunta").innerHTML="OPCIONES";
		document.getElementById("respuesta").innerHTML=""
		document.getElementById("uno").innerHTML="♪";
		document.getElementById("dos").innerHTML="⚖";
		document.getElementById("tres").innerHTML="";
		document.getElementById("cuatro").innerHTML="";
		document.getElementById("cinco").innerHTML="";
		document.getElementById("seis").innerHTML="";
		document.getElementById("siete").innerHTML="";
		document.getElementById("ocho").innerHTML="";
		document.getElementById("nueve").innerHTML="nivel";
		document.getElementById("cero").innerHTML="tabla";
		document.getElementById("opciones").innerHTML="<<";
	}else{
		document.getElementById("uno").innerHTML="1";
		document.getElementById("dos").innerHTML="2";
		document.getElementById("tres").innerHTML="3";
		document.getElementById("cuatro").innerHTML="4";
		document.getElementById("cinco").innerHTML="5";
		document.getElementById("seis").innerHTML="6";
		document.getElementById("siete").innerHTML="7";
		document.getElementById("ocho").innerHTML="8";
		document.getElementById("nueve").innerHTML="9";
		document.getElementById("cero").innerHTML="0";
		document.getElementById("opciones").innerHTML="✱";
	}
}
