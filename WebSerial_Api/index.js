navigator.serial.addEventListener("connect", (e) => {
  // Connect to `e.target` or add it to a list of available ports.
  document.getElementById("connect").innerHTML = `
  <button id="webSerial">Conectar Puerto Serial</button>
  `;
  document.getElementById("webSerial").addEventListener("click", ejec);
});

navigator.serial.addEventListener("disconnect", (e) => {
  // Remove `e.target` from the list of available ports.
  document.getElementById("connect").innerHTML =
    "Esperando por conexión de dispositivo...";
});

/*
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
  console.log(ports);
});
*/

function ejec() {
  navigator.serial.requestPort().then(async (port) => {
    setInterval(async () => {
      await port.open({ baudRate: 9600 });

      while (port.readable) {
        const textDecoder = new TextDecoderStream();
        const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
        const reader = textDecoder.readable.getReader();

        // Listen to data coming from the serial device.
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            // Allow the serial port to be closed later.
            reader.releaseLock();
            break;
          }
          // value is a string.
          document.getElementById("serial").innerHTML = `${value}cm`;
        }
        /*
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            // Allow the serial port to be closed later.
            reader.releaseLock();
            break;
          }
          if (value) {
            console.log(value);
          }
        }
      } catch (error) {
        // TODO: Handle non-fatal read error.
      }*/
      }
    }, 1000);
  });
}

document.getElementById("initial_values").addEventListener("submit", (form) => {
  form.preventDefault()
  altura.readOnly = "1"
  diametro.readOnly = "1"
  
  const data = new FormData(initial_values)

  console.log({
    "altura": data.get("altura"),
    "diametro": data.get("diametro")
  })
  document.getElementById("datos").innerHTML += `
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
  `
});
