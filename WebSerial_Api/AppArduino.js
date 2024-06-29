import { Arduino } from "./Arduino.js";
import { charts, Grafica } from "../Grafica/AppGrafica.js";
let conected = false;

navigator.serial.addEventListener("disconnect", (e) => {
  // Remove `e.target` from the list of available ports.
  document.getElementById("connect").innerHTML =
    "Esperando por conexión de dispositivo...";
  conected = false;
});

const ar = new Arduino();

/** EVENTOS DE FORMULARIOS DEL HTML */
document.getElementById("initial_values").addEventListener("submit", (form) => {
  form.preventDefault();
  const data = new FormData(initial_values);

  console.log({
    altura: data.get("altura"),
    diametro: data.get("diametro"),
  });

  document.getElementById("connect").innerHTML = `
  <button class="btn btn-primary" id="webSerial">Conectar Puerto Serial</button>
  `;
  document.getElementById("webSerial").addEventListener("click", arduino);
});

document.getElementById("monitor").addEventListener("submit", (form) => {
  form.preventDefault();
});

function arduino() {
  navigator.serial.requestPort().then(async (port) => {
    ar.setPort(port);

    //escribir(port);
    ar.writeOnPort(altura, diametro);
    //leer(port);
    ar.readOnPort();
  });

  // Por ahora se ejecutara aquí...
  var interval = setInterval(() => {
    let values = [
      temperatura(Math.random()),
      pureza(Math.random()),
      ph(Math.random()),
      nivel(Math.random()),
    ];

    // Se actualizan los valores en el monitor
    updateValueMonitor(values);

    // Se actualizan los Objetos [Charts]
    values.forEach((value, i) => {
      charts[i].appendValues(value);
    });
  }, 1000);

  /**
   *
   * @param {Number[]} arrValues
   */
  function updateValueMonitor(arrValues) {
    let monitorV = [
      document.getElementById("temperatura"),
      document.getElementById("pureza"),
      document.getElementById("ph"),
    ];

    arrValues.forEach((value, i) => {
      if (i < arrValues.length - 1) {
        monitorV[i].innerHTML = value.toFixed(2);
      }
    });
  }

  function temperatura(value) {
    return value * 3 + 24;
  }

  function pureza(value) {
    return value * 3 + 32;
  }

  function ph(value) {
    return value * 0.3 + 8.1;
  }

  function nivel(value) {
    return value * 5 + 10;
  }

  document.getElementById("stopInterval").addEventListener("click", () => {
    clearInterval(interval);
  });
}

/*
async function escribir(port) {
  setTimeout(async () => {
    const textEncoder = new TextEncoderStream();
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
    const writer = textEncoder.writable.getWriter();

    await writer.write(`${altura.value},${diametro.value}`);
  }, 2000);
}

async function leer(port) {
  await port.open({ baudRate: 9600 });

  const textDecoder = new TextDecoderStream();
  const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
  const reader = textDecoder.readable.getReader();

  while (port.readable) {
    // Listen to data coming from the serial device.
    let str = "";
    let arr = Array(1);
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // Allow the serial port to be closed later.
        reader.releaseLock();
        console.log(value);
        break;
      } else {
        console.log("algo pasó", done, value == "\n");
      }
      // value is a string.
    }
  }
}
*/
