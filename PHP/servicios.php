<?php

class servicios {
    private $datos;

    public function __construct($DATA){
        if (array_key_exists("datos", $DATA)) {
            try {
                $this->datos = json_decode($DATA["datos"]);
            } // Recupero datos
			catch(Exception $e) {
                $this->datos = new stdClass();
            }; // Objeto vacío

            if (property_exists($this->datos, "operacion") && method_exists($this, $this->datos->operacion)) {
                $operacion = $this->datos->operacion;
                $temporal = $this->$operacion($this->datos); // Ejecutar dinámicamente un método
                $this->log("Resultado: " . json_encode($temporal));
                echo json_encode($temporal);
            } else {
                echo "Servicio desconocido";
            }
        }
    }

    // Crear un archivo y grabar el texto indicado
    private function log($texto){
        $f = fopen("log.txt", "w");
        fwrite($f, $texto);
        fclose($f);
    }

    private function CALCULAR_SUMA($datos){
        $resultado = $datos->entrada[0] + $datos->entrada[2];
        $datos->resultado = $resultado;
        return $datos;
    }

    private function CALCULAR_RESTA($datos){
        $resultado = $datos->entrada[0] - $datos->entrada[2];
        $datos->resultado = $resultado;
        return $datos;
    }

    private function CALCULAR_MULTIPLICACION($datos){
        $resultado = $datos->entrada[0] * $datos->entrada[2];
        $datos->resultado = $resultado;
        return $datos;
    }

    private function CALCULAR_DIVISION($datos){
        if ($datos->entrada[2] != 0) {
            $resultado = $datos->entrada[0] / $datos->entrada[2];
        } else {
            $resultado = "Error: División por cero";
        }
        $datos->resultado = $resultado;
        return $datos;
    }
}

count($_POST) ? new servicios($_POST) : new servicios($_GET);

?>
