class calculadoraUI {
    constructor(reset = false) {
        if (reset == true) {
            
            this.form = document.querySelector("form");
            
            // numeros
            this.uno = document.getElementById("uno");
            this.dos = document.getElementById("dos");
            this.tres = document.getElementById("tres");
            this.cuatro = document.getElementById("cuatro");
            this.cinco = document.getElementById("cinco");
            this.seis = document.getElementById("seis");
            this.siete = document.getElementById("siete");
            this.ocho = document.getElementById("ocho");
            this.nueve = document.getElementById("nueve");
            this.cero = document.getElementById("cero");

            // operadores
            this.sumar = document.getElementById("sumar");
            this.restar = document.getElementById("restar");
            this.multiplicar = document.getElementById("multiplicar");
            this.dividir = document.getElementById("dividir");
            this.decimal = document.getElementById("decimal");

            this.calcular = document.getElementById("calcular");
            this.limpiar = document.getElementById("limpiar");
            this.limpiar2 = document.getElementById("limpiar2");

            this.entrada = document.getElementById("entrada");
            this.datos = document.querySelector("#datos");

            this.fijarEventos();
        }
    }

    fijarEventos() {

        this.uno.addEventListener("click",      () => this.tomarValor(document.getElementById("uno").value));
        this.dos.addEventListener("click",      () => this.tomarValor(document.getElementById("dos").value));
        this.tres.addEventListener("click",     () => this.tomarValor(document.getElementById("tres").value));
        this.cuatro.addEventListener("click",   () => this.tomarValor(document.getElementById("cuatro").value));
        this.cinco.addEventListener("click",    () => this.tomarValor(document.getElementById("cinco").value));
        this.seis.addEventListener("click",     () => this.tomarValor(document.getElementById("seis").value));
        this.siete.addEventListener("click",    () => this.tomarValor(document.getElementById("siete").value));
        this.ocho.addEventListener("click",     () => this.tomarValor(document.getElementById("ocho").value));
        this.nueve.addEventListener("click",    () => this.tomarValor(document.getElementById("nueve").value));
        this.cero.addEventListener("click",     () => this.tomarValor(document.getElementById("cero").value));

        this.sumar.addEventListener("click",        () => this.tomarValor(document.getElementById("sumar").value));
        this.restar.addEventListener("click",       () => this.tomarValor(document.getElementById("restar").value));
        this.multiplicar.addEventListener("click",  () => this.tomarValor(document.getElementById("multiplicar").value));
        this.dividir.addEventListener("click",       () => this.tomarValor(document.getElementById("dividir").value));
        this.decimal.addEventListener("click",      () => this.tomarValor(document.getElementById("decimal").value));

        this.calcular.addEventListener("click", this.enviar_click_calcular);
        this.limpiar.addEventListener("click", () => this.limpiarEntrada(document.getElementById("limpiar").value));
        this.limpiar2.addEventListener("click", () => this.limpiarEntrada(document.getElementById("limpiar").value));

        this.entrada.readOnly = true;
    }

    tomarValor(x) {
        console.log('Valor:', x);
        this.entrada.value += x;
    }

    limpiarEntrada(y) {
        this.entrada.value = y;
    }

    enviar_click_calcular(e){
        e.preventDefault();
        self.calcular();
    }

    mostrarNotificacion(mensaje) {
        this.notificacion = document.getElementById("notificacion");
        notificacion.innerText = mensaje;
        notificacion.className = "toast show";

        // Asignación de tiempo al Toast
        setTimeout(function(){
            notificacion.className = "toast";
        }, 4000); // La notificación desaparecerá después de 4 segundos
    }

    recuperar(...args) {
        let datos = {};

        for (const arg of args) {
            if (UI.hasOwnProperty(arg)) datos[arg] = UI[arg].value;
        }
        return datos;
    }

    mensaje(texto) {
        alert(texto);
    }
}