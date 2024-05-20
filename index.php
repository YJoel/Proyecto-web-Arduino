<?php
$verz = "1.0";
/*if (isset($_POST["led"])) { //Si ya fue creado el objeto “led”...
  $comPort = "/dev/ttyACM0"; //Colocar el puerto que corresponda.
  $led = $_POST["led"]; //Recibe el balor booleano del LED.
  $fp = fopen($comPort, " w "); //Abre el archivo ttyACM0 para escritura.
  sleep(2);
  fwrite($fp, $led); // Escribimos el valor de la variable $led en el puero com.
  fclose($fp);
} //Cierra el dispositivo.

// Configura el puerto COM1 con los parámetros deseados
$output = `mode COM1: BAUD=115200 PARITY=N data=8 stop=1 XON=off TO=on`;

// Abre el puerto COM1
$fp = fopen('COM1', 'r+');
if (!$fp) {
  echo "El puerto no es accesible";
} else {
  echo "Puerto COM1 abierto correctamente";
}

// Escribe datos en el puerto
$writtenBytes = fputs($fp, "Hello");
echo "Bytes escritos en el puerto: $writtenBytes";

// Lee datos del puerto
$buffer = fgets($fp);
echo "Datos leídos del buffer: $buffer";
*/
?>
<html lang="es">

<head>
  <title>
    Arduino - Conect
  </title>
</head>

<body>
  <center>
    <h1>Ejemplo de Arduino con PHP</h1><b>Version <?php echo $verz; ?></b>
  </center>
  <!--
  <form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
    &nbsp&nbsp&nbsp&nbsp
    <input type="text" name="led">
    <br />
    <input type="submit" value="OK">
    <br />
  </form>-->
  <button type="submit" id="webSerial">
    WebSerial
  </button>
  <fieldset id="serial">
    <legend>WEB SERIAL API</legend>
  </fieldset>
  <!--<script src="WebUsb_Api\index.js"></script>-->
  <script src="WebSerial_Api/index.js"></script>
</body>

</html>