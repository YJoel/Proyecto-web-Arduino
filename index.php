<html lang="es">

<head>
  <title>
    Arduino - Conect
  </title>

  <style>
    table, tr, th, td{
      border: 1px solid black;
    }

    table#datos tr td{
      padding: 3px 7px;
      border-radius: 0px;
    }

    table#datos tr:first-child th{
      padding: 3px 7px;
      border-radius: 10px 10px 0px 0px;
    }

    table#datos tr:last-child td{
      padding: 3px 7px;
      border-radius: 0px 0px 10px 10px;
    }
  </style>
</head>

<body>

  <h1>Conectar Puerto Serie con php & Javascript</h1>

  <h3> Ingrese los valores iniciales para comenzar el programa: </h3>
  <form action="" id="initial_values" name="initial-values">
    <fieldset>
      <legend>DIMENSIONES DEL ESTANQUE</legend>
      <label for="altura">Altura (cm): </label>
      <input type="number" min="0" value="" id="altura" name="altura" required>
      <br>
      <label for="diametro">Diametro (cm):</label>
      <input type="number" min="0" value="" id="diametro" name="diametro" required>
      <br>
      <input type="submit" value="Guardar">
    </fieldset>
  </form>
  <form action="" id="monitor">
    <fieldset>
      <legend>PANEL DE MONITOREO</legend>

      <div class="connect" id="connect">
        Esperando por conexión de dispositivo...
      </div>
    </fieldset>
    <fieldset>
      <table id="datos" align="center" width="70%">
        <tr>
          <th>NIVEL DEL AGUA</th>
          <th>PUREZA</th>
          <th>TEMPERATURA</th>
        </tr>
      </table>
    </fieldset>
  </form>
  <!--<script src="WebUsb_Api\index.js"></script>-->
  <script src="WebSerial_Api/index.js"></script>
</body>

</html>