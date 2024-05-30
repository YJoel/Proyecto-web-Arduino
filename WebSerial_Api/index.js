let conected = false;

/*navigator.serial.addEventListener("connect", (e) => {
  // Connect to `e.target` or add it to a list of available ports.
  if (altura != 0 && diametro != 0) {
    document.getElementById("connect").innerHTML = `Puerto Serial Conectado!`;
    document.getElementById("webSerial").addEventListener("click", ejec);
  }
});*/

navigator.serial.addEventListener("disconnect", (e) => {
  // Remove `e.target` from the list of available ports.
  document.getElementById("connect").innerHTML =
    "Esperando por conexión de dispositivo...";
  conected = false;
  clearInterval();
});

/*
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
  console.log(ports);
});
*/

function arduino() {
  navigator.serial.requestPort().then(async (port) => {
    escribir(port);
    leer(port);
  });
}

async function escribir(port) {
  setTimeout(async () => {
    const textEncoder = new TextEncoderStream();
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
    const writer = textEncoder.writable.getWriter();

    await writer.write(`${altura.value},${diametro.value}`);
  }, 1000);
}
async function leer(port) {
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
        let tr = document.createElement("tr");
        for (let i = 0; i < 3; i++) {
          let arr = [value, 0, 0];
          let td = document.createElement("td");
          td.innerHTML = `${arr[i]}cm`;
          tr.append(td);
        }

        document
          .getElementById("datos")
          .insertBefore(tr, document.getElementById("datos").children[1]);
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
}

document.getElementById("initial_values").addEventListener("submit", (form) => {
  form.preventDefault();

  const data = new FormData(initial_values);

  console.log({
    altura: data.get("altura"),
    diametro: data.get("diametro"),
  });

  document.getElementById("connect").innerHTML = `
  <button id="webSerial">Conectar Puerto Serial</button>
  `;
  document.getElementById("webSerial").addEventListener("click", arduino);

  let tr = document.createElement("tr");

  for (let i = 0; i < 3; i++) {
    let arr = [i, data.get("altura"), data.get("diametro")];
    let td = document.createElement("td");
    td.innerHTML = `${arr[i]}`;
    tr.append(td);
  }
  document
    .getElementById("datos")
    .insertBefore(tr, document.getElementById("datos").children[1]);
});

document.getElementById("monitor").addEventListener("submit", (form) => {
  form.preventDefault();
  ejec();
});
