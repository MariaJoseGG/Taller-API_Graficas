var a_o = [];
var salas_quir_fano=[];

// Consumo de la API
fetch('https://www.datos.gov.co/resource/fa2g-cdft.json')

    // Then necesita una promesa, y esa promesa se resuelve con una respuesta 
    .then(datos_obtenidos => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {

        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (datos_obtenidos.a_o != undefined && datos_obtenidos.salas_quir_fano) {
                a_o.push(datos_obtenidos.a_o);
                salas_quir_fano.push(datos_obtenidos.salas_quir_fano);
            }
        });

        var trace1 = {
            x: [2017,2018,2019,2020],
            y: salas_quir_fano,
            mode: 'lines',
            marker: {
              color: 'rgb(51, 255, 85  )',
              size: 12
            }
          };
                // Estilos de la gráfica
        var layout =
        {
            title: 'HUMEDAD',
            font: {
                family: 'Times New Roman'
            },
            xaxis:
            {
                title: 'FECHA'
            },
            yaxis:
            {
               title: 'HUMEDAD'
            }
        };
          
          var data = [trace1];
          
        Plotly.newPlot('div3', data,layout);
    });