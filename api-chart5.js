var camas_adultos=[];
// Consumo de la API
fetch('https://www.datos.gov.co/resource/fa2g-cdft.json')

    // Then necesita una promesa, y esa promesa se resuelve con una respuesta 
    .then(datos_obtenidos => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {

        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (datos_obtenidos.camas_adultos != undefined ) {
                camas_adultos.push(datos_obtenidos.camas_adultos);
            }
        });

    let mayor=0;
    for ( i = 0; i < camas_adultos.length; i++) {
        if(camas_adultos[i]>mayor){
            mayor=camas_adultos[i];
        }
    }
   console.log(mayor);
        
var data = [
  {
    type: "indicator",
    //value: mayor,
    value: 430,
    delta: { reference: 160 },
    gauge: { axis: { visible: false, range: [0, 1000] } },
    domain: { row: 0, column: 0 }
  },
];

var layout = {
  width: 570,
  height: 290,
  backgroundColor:"red",
  //margin: { t: 25, b: 25, l: 25, r: 25,},
 // grid: { rows: 2, columns: 2, pattern: "independent" },
  template: {
    data: {
      indicator: [
        {
          title: { text: "Humedad" },
          mode: "number+delta+gauge",
          delta: { reference: 90 }
        }
      ]
    }
  }
};

Plotly.newPlot('div5', data, layout);
});