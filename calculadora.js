class calculadora {
    calcular() {
        var datos = UI.recuperar("entrada");
        console.log(datos);
        if(self.validar(datos) == true){
            
            if (datos.entrada.indexOf('+') !== -1) {
                console.log("Hacer suma");
                //Se modifica la propiedad del objeto entrada, seperando caracteres
                datos.entrada = datos.entrada.match(/(\d+(\.\d+)?|[+\-*/])/g);
                datos.operacion = "CALCULAR_SUMA";
                ajax.post(datos, this.resultado);
                console.log("Enviado: ",datos);
            } else if (datos.entrada.indexOf('-') !== -1) {
                console.log("Hacer resta");
                //Se modifica la propiedad del objeto entrada, seperando caracteres
                datos.entrada = datos.entrada.match(/(\d+(\.\d+)?|[+\-*/])/g);
                datos.operacion = "CALCULAR_RESTA";
                ajax.post(datos, this.resultado);
                console.log("Enviado: ",datos);
            } else if (datos.entrada.indexOf('*') !== -1) {
                console.log("Hacer multiplicación");
                //Se modifica la propiedad del objeto entrada, seperando caracteres
                datos.entrada = datos.entrada.match(/(\d+(\.\d+)?|[+\-*/])/g);
                datos.operacion = "CALCULAR_MULTIPLICACION";
                ajax.post(datos, this.resultado);
                console.log("Enviado: ",datos);
            } else if (datos.entrada.indexOf('/') !== -1) {
                console.log("Hacer división");
                //Se modifica la propiedad del objeto entrada, seperando caracteres
                datos.entrada = datos.entrada.match(/(\d+(\.\d+)?|[+\-*/])/g);
                datos.operacion = "CALCULAR_DIVISION";
                ajax.post(datos, this.resultado);
                console.log("Enviado: ",datos);
            } else {
                console.log("Operación no reconocida");
            }
        }
    }

    resultado(r) {
		// Convierto el objeto json de la respuesta a un objeto Javascript
		r = JSON.parse(r)
		
		// A consola para verificar
		console.log("Recibido: ",r);

        document.getElementById('entrada').value = r.resultado;

        UI.mostrarNotificacion("¡OBJETO GUARDADO CORRECTAMENTE!");
	}

    validar(datos){

        let mensaje = "";

        if (!datos.hasOwnProperty("entrada") || datos.entrada === "") {
            mensaje = "Falta ingresar una entrada.";
        }else if (!datos.hasOwnProperty("entrada") || !/[+\-*/]/.test(datos.entrada)) {
            mensaje = "Expresión no válida: Debe contener al menos un operador (+, -, *, /).";
        } else if (!datos.hasOwnProperty("entrada") || /([+\-*/]){2,}/.test(datos.entrada)) {
            mensaje = "Expresión no válida: No pueden haber dos operadores consecutivos.";
        }
        var operadores = datos.entrada.match(/[+\-*/]/g);
        if (!operadores || operadores.length !== 1) {
            mensaje = "Expresión no válida: Debe contener exactamente un operador (+, -, *, /).";
        }

        if (mensaje !== "") {
            UI.mensaje(mensaje);
            return false;
        }

        return true;
    }
}

window.onload = () => {
    window.UI = new calculadoraUI(true) // El objeto vista
    window.self = new calculadora() // El objeto controlador
    window.ajax = new Ajax("PHP/servicios.php")
}