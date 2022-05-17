var eventos = [];
var heridos = [];
var fallecidos = [];
const tam1 = 10;
var tams1 = [];

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