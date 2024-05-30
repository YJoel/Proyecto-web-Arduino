<html lang="es">

<head>
  <title>
    Arduino - Conect
  </title>

  <style>
    table,
    tr,
    th,
    td {
      border: 1px solid black;
    }

    table#datos tr td {
      padding: 3px 7px;
      border-radius: 0px;
    }

    table#datos tr:first-child th {
      padding: 3px 7px;
      border-radius: 10px 10px 0px 0px;
    }

    table#datos tr:last-child td {
      padding: 3px 7px;
      border-radius: 0px 0px 10px 10px;
    }

    body {
      box-sizing: content-box;
      background: linear-gradient(to bottom right, white, #ABF1FF, #ABD6FF, #ACBCFF);
      font-size: large;
    }

    input {
      border: 0;
      border-radius: 10px;
      margin: 8px;
      transition: 0.3s;
    }

    input:focus {
      background: linear-gradient();
      box-shadow: 0px 0px 10px 2px white;
    }

    input[type="submit"] {
      cursor: pointer;
      border: 1px solid white;
      transition: 0.3s;
      padding: 3px 5px;
      border-color: gray;
      margin: 7px;
    }

    input[type="submit"]:hover {
      border-color: #ABF1FF;
      background-color: #ABF1FF;
      box-shadow: 0px 0px 0px 5px #ABD6FF;
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
      <input type="number" min="0" value="50" id="altura" name="altura" required>
      <br>
      <label for="diametro">Diametro (cm):</label>
      <input type="number" min="0" value="30" id="diametro" name="diametro" required>
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