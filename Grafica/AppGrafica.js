import { Grafica } from "./Grafica.js";

const ids = ["grafica1", "grafica2", "grafica3", "grafica4"];
const charts = [];
ids.forEach((el) => {
  if (el === "grafica4") {
    charts.push(
      new Grafica(el, {
        type: "bar",
        data: {
          labels: ["Agua"],
          datasets: [
            {
              label: "Nivel de Agua",
              data: [],
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgb(54, 162, 235)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [{ ticks: { min: 0, max: 16 } }],
          },
        },
      })
    );
  } else {
    charts.push(
      new Grafica(el, {
        type: "line",
        data: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          datasets: [
            {
              label: "Grafica 1",
              fill: false,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: [],
            },
          ],
        },
        options: {
          legend: { display: false },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
    );
  }
});

export { charts, Grafica };
