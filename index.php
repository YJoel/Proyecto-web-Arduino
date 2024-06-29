<html lang="es">

<head>
  <title>
    Arduino - Conect
  </title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container pt-4">
    <h1>Arduino - Conect</h1>
    <div class="row">
      <div class="col-4">
        <form action="" id="initial_values" name="initial-values">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Datos Iniciales</h5>
              <p class="card-text">
                Ingrese los valores iniciales para comenzar el programa
                content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <label for="altura">Altura (cm):</label>
                <input class="form-control" type="number" min="0" value="50" id="altura" name="altura" required>
              </li>
              <li class="list-group-item">
                <label for="diametro">Diametro (cm):</label>
                <input class="form-control" type="number" min="0" value="30" id="diametro" name="diametro" required>
              </li>
              <li class="list-group-item">
                <input class="btn btn-primary" type="submit" id="validar" value="Validar Datos">
                <input class="btn btn-primary mt-3" readonly id="stopInterval" value="Detener programa">
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div class="col-8">
        <form action="" id="monitor" class="mt-4 mb-4">
          <fieldset>
            <legend>
              <b>PANEL DE MONITOREO</b>
            </legend>

            <div class="connect" id="connect">
              Esperando por conexión de dispositivo...
            </div>
          </fieldset>
          <fieldset>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">NIVEL DEL AGUA</th>
                  <th scope="col">TEMPERATURA</th>
                  <th scope="col">PUREZA</th>
                  <th scope="col">PH</th>
                </tr>
              </thead>
              <tbody>
                <tr id="datos">
                  <td>
                    <div style="width: 90%">
                      <canvas id="grafica4"></canvas>
                    </div>
                  </td>
                  <td id="temperatura"></td>
                  <td id="pureza"></td>
                  <td id="ph"></td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <h3>
          Grafica de Temperatura
        </h3>
        <canvas id="grafica1"></canvas>
      </div>
      <div class="col-4">
        <h3>
          Grafica de Pureza
        </h3>
        <canvas id="grafica2"></canvas>
      </div>
      <div class="col-4">
        <h3>
          Grafica de Ph
        </h3>
        <canvas id="grafica3"></canvas>
      </div>
    </div>
  </div>
  <script type="module" src="./WebSerial_Api/AppArduino.js"></script>
  <!--<script src="WebUsb_Api\index.js"></script>-->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
    integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
    crossorigin="anonymous"></script>
</body>

</html>