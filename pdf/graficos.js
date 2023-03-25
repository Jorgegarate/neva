//grafico Estrategia .....

var chart = bb.generate({
  data: {
    x: "x",
    columns: [
	["x", "Estrategia", "Finanzas", "Marketing", "Operaciones", "Gestion de personas", "Comercial y ventas"],
	["data1", 40, 50, 40, 80, 50, 30, 100]
    ],
    type: "radar", // for ESM specify as: radar()
    labels: true
  },
  radar: {text: {
        format: function(x) { return x + "%"; }
      },
    axis: {
      max: 120,
      line: {
        show: true
      },
      text: {
        show: true
      }
    },
    level: {
      text: {
        show: false
      }
    }
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#radarAxis"
});
  //Grafico tabla 1
  var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest"
});
//Grafico tabla 2
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest2"
});
//Grafico tabla 3
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest3"
});
//Grafico tabla 4
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest4"
});
//Grafico tabla 5
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest5"
});
//Grafico tabla 6
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest6"
});
//Barras Hoja 2
// Barras Stack Normalizer
var chart2 = bb.generate({
  data: {
    x: "x",
    columns: [
	["x", "Estrategia", "Finanzas", "Marketing", "Operación", "Gestion de Personas", "Comercial y Ventas"],
	["data1", 30, 280, 951, 400, 150, 546, 4528]
    ],
    type: "bar", // for ESM specify as: bar()
    groups: [
      [
        "data1",
        "data2",
        "data3"
      ]
    ],
    stack: {
      normalize: false
    }
  },
  axis: {
    x: {
      type: "category"
    }
  },
  color: {
        pattern: [
         "#16C59B"
          
       ]
      },
  bindto: "#dataStackNormalized_2"
});

//BARRAS COLOR ONOVER 2

var chart = bb.generate({
  data: {
    columns: [
	["data1", 230, null, 100, 400, 150],
	["data2", null, null, null, 240, 115],
	["data3", null, 220, 140, 200, null]
    ],
    groups: [
      [
        "data1",
        "data2",
        "data3"
      ]
    ],
    type: "bar", // for ESM specify as: bar()
  },
  colors: {
    
      data1: "red",
      data2: "black",
      data3: "blue"
  
  },
  color: {
    pattern: [
      "#16C59B",
      "#C09F5A",
      "#7192F0"
    ]
  },
  bindto: "#colorOnover_2"
});
//Grafico tabla 7
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest7"
});
//Grafico tabla 8
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest8"
});
//Grafico tabla 9
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest9"
});
//Grafico tabla 10
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest10"
});
//Grafico tabla 11
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest11"
});
//Grafico tabla 12
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest12"
});
//Grafico tabla 13
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest13"
});
//Grafico tabla 14
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest14"
});
//Grafico tabla 15
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest15"
});
//Grafico tabla 16
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest16"
});
//Grafico tabla 17
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest17"
});
//Grafico tabla 18
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest18"
});
//Grafico tabla 19
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest19"
});
//Grafico tabla 20
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest20"
});
//Grafico tabla 21
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest21"
});
//Grafico tabla 22
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest22"
});
//Grafico tabla 23
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest23"
});
//Grafico tabla 24
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest24"
});
//Grafico tabla 25
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest25"
});
//Grafico tabla 26
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest26"
});
//Grafico tabla 27
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest27"
});
//Grafico tabla 28
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest28"
});
//Grafico tabla 29
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest29"
});
//Grafico tabla 30
var chart = bb.generate({
  data: {
    columns: [
	["data", 91.4]
    ],
    type: "gauge", // for ESM specify as: gauge()
  },
  gauge: {
    max: 1000
  },
  color: {
    pattern: [
      "#16C59B"
    ]
  },
  bindto: "#updateConfigtest30"
});
 //BARRAS COLOR ONOVER 2
 var chart = bb.generate({
  data: {
    columns: [
	["data1", 230, 200, 100, 400, 150, 250],
	["data2", 150, 320, 210, 240, 115, 125],
	["data3", 130, 220, 140, 200, 250, 450]
    ],
    groups: [
      [
        "data1",
        "data2",
        "data3"
      ]
    ],
    type: "bar", // for ESM specify as: bar()
  },
  color: {
    onover: {
      data1: "#868484",
      data2: "black",
      data3: "rgb(202, 202, 202)"
    }
  },
  bindto: "#colorOnover_1"
});