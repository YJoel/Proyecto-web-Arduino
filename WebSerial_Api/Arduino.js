class Arduino {
  constructor(port) {
    this.port = port;
  }

  setPort(port) {
    this.port = port;
  }

  getPort() {
    return this.port;
  }

  /**
   * 
   * @param {HTMLInputElement} altura 
   * @param {HTMLInputElement} diametro 
   */
  async writeOnPort(altura, diametro) {
    setTimeout(async () => {
      const textEncoder = new TextEncoderStream();
      const writableStreamClosed = textEncoder.readable.pipeTo(
        this.port.writable
      );
      const writer = textEncoder.writable.getWriter();

      await writer.write(`${altura.value},${diametro.value}`);
    }, 2000);
  }

  async readOnPort() {
    await this.port.open({ baudRate: 9600 });

    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = this.port.readable.pipeTo(
      textDecoder.writable
    );
    const reader = textDecoder.readable.getReader();

    // Verifica la disponibilidad del Puerto
    while (this.port.readable) {

      // Listen to data coming from the serial device.
      let str = "";
      let arr = Array(1);

      // Empezamos a leer
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
}

export { Arduino };
