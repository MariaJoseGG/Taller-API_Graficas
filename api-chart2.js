var eventos = [];
var heridos = [];
var fallecidos = [];
const tam1 = 10;
var tams1 = [];
const color1 = 'rgb(83,255,211)';
var col1 = [];
const color2 = 'rgb(255,83,127)';
var col2 = [];

// Consumo de la API
fetch('https://www.datos.gov.co/resource/4t8v-ywmw.json')

    // Then necesita una promesa, y esa promesa se resuelve con una respuesta 
    .then(datos_obtenidos => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {

        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (datos_obtenidos.evento != undefined && datos_obtenidos.fallecidos != undefined && datos_obtenidos.heridos != undefined) {
                eventos.push(datos_obtenidos.evento);
                heridos.push(datos_obtenidos.heridos);
                fallecidos.push(datos_obtenidos.fallecidos);
                tams1.push(tam1);
                col1.push(color1);
                col2.push(color2);
            }
        });

        // Variables para las gráficas
        var graf1 =
        {
            y: heridos,
            x: eventos,
            mode: 'markers',
            marker: {
                size: tams1,
                color: col1
            },
            name: 'Heridos'
        };

        var graf2 =
        {
            y: fallecidos,
            x: eventos,
            mode: 'markers',
            marker: {
                size: tams1,
                color: col2
            },
            name: 'Fallecidos'
        };

        var datosGraficas = [graf1, graf2];

        // Estilos de la gráfica
        var layout =
        {
            title: 'Emergencias 2020',
            font: {
                family: 'Times New Roman'
            },
            xaxis:
            {
                title: 'Eventos'
            },
            yaxis:
            {
                title: 'Heridos y Fallecidos'
            }
        };

        Plotly.newPlot('div2', datosGraficas, layout);
    });