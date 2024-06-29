class Grafica {
  constructor(el, config) {
    this.grafica = new Chart(el, config);
  }

  getGrafica() {
    return this.grafica;
  }

  /**
   * @param {Number} value
   */

  appendValues(value) {
    if (this.grafica.config.type == "line") {
      if (
        this.grafica.config.data.labels.length ==
        this.grafica.config.data.datasets[0].data.length
      ) {
        this.grafica.config.data.labels.shift();
        this.grafica.config.data.labels.push(
          this.grafica.config.data.labels[
            this.grafica.config.data.labels.length - 1
          ] + 1
        );
        this.grafica.config.data.datasets[0].data.shift();
        this.grafica.config.data.datasets[0].data.push(value);
      } else {
        this.grafica.config.data.datasets[0].data.push(value);
      }
      this.grafica.update();
    } else if (this.grafica.config.type == "bar"){
      this.grafica.config.data.datasets[0].data = [value]
      this.grafica.update();
    }
  }
}

export { Grafica };
