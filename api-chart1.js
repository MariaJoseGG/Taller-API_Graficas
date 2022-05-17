var programa = [];
var total = [];

// Consumo de la API
fetch("https://www.datos.gov.co/resource/icm4-xg7x.json")
  // Then necesita una promesa, y esa promesa se resuelve con una respuesta
  .then((datos_obtenidos) => datos_obtenidos.json())

  //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
  .then(function transformar(datos_obtenidos) {
    // Iteramos sobre cada dato
    datos_obtenidos.forEach(function agregar(datos_obtenidos) {
      //Si los datos son diferentes de vacío
      if (
        datos_obtenidos.admitido != undefined &&
        datos_obtenidos.programas_por_novedad != undefined
      ) {
        total.push(datos_obtenidos.admitido);
        programa.push(datos_obtenidos.programas_por_novedad);
      }
    });

    // console.log("Tamaños: ",total.length," ",nacionalidad.length);

    // Variables para las gráficas
    var graf1 = {
      type: "pie",
      values: total,
      labels: programa,
      textinfo: "none",
      automargin: true,
    };

    var datosGraficas = [graf1];

    // Estilos de la gráfica
    var layout = {
      title: "Estudiantes Por Programa",
      font: {
        family: "Times New Roman",
      },
    };

    Plotly.newPlot("div1", datosGraficas, layout);
  });
