
var respuesta = [];
var factores = [];
var solucion;


function nuevoProducto(){
	factores[0] = Math.floor(10 * Math.random());
	factores[1] = Math.floor(10 * Math.random());
	solucion = factores[0]*factores[1];
	document.getElementById("pregunta").innerHTML=factores.join(" * ");
	document.getElementById("respuesta").innerHTML="";	
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
			setTimeOut(nuevoProducto(),0);
		}		
	}		
}
