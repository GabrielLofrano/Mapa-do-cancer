  const labels = [
    
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018'

  ];

    const data = {
        
        labels: labels,
        datasets: [{
        label: 'Pulmão',
        backgroundColor: ['blue'],
        borderColor: 'blue',
        data: [3612, 3588, 4281, 4825, 4970, 4999, 4978, 5166, 4938, 4467, 4733, 4883, 5074, 5540, 5801, 5824, 5442, 5183, 5078, 3269, 2608, 554],
        borderWidth: 1
  
        },
        {
        label: 'Próstata',
        backgroundColor: ['red'],
        borderColor: 'red',
        data: [4725, 5205, 6450, 7903, 7777, 8336, 8259, 9324, 10507, 9577, 9737, 10268, 11208, 12831, 12796, 12085, 11664, 11017, 10322, 5725, 4247, 1554],
        borderWidth: 1
  
        },
        {
        label: 'Mama',
        backgroundColor: ['green'],
        borderColor: 'green',
        data: [7120, 7854, 9022, 10908, 10546, 11485, 10577, 10985, 11693, 10687, 11502, 13157, 12793, 14919, 15507, 14085, 14718, 13633, 12408, 7656, 5930, 1634],
        borderWidth: 1
  
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const firstChart = new Chart(
    document.getElementById('firstChart').getContext('2d'),
    config
  );



  //Gráfico casos e obitos
  var ctx = document.getElementById("thirdChart");
  var chart = new Chart(ctx, {
  type: "bar",
  data: {
  labels: [
      '1997',
      '1998',
      '1999',
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',

  ],

  datasets: [
  {
      type: "line",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      label: "Obitos",
      data: [1993, 1759, 2825 ,3683 ,5633 ,4235 ,4703 ,5305 ,6075 ,5835 ,5384 ,6007, 6373,7253, 8050 ,7622 ,6884 ,7266 ,7624 ,6525 ,5996, 2279],
  },
  {
      type: "bar",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      label: "Casos",
      data: [15457, 16647, 19753 ,23636 ,23293 ,24820 ,23814 ,25475 ,27138 ,24731 ,25972 ,28308 ,29075 ,33290 ,34104 ,31994 ,31824 ,29833 ,27808 ,16650 ,12785, 3742],
      lineTension: 0, 
      fill: true 
  }
  ]
}
});



  const data2 = {
  labels: [
    'Mulheres',
    'Homens'

  ],
  datasets: [{
    data: [40814, 62193],
    backgroundColor: [
      '#F75D59',
      '#62b4cf',

    ],
    hoverOffset: 4
  }]
  };

  const config2 = {
        type: 'pie',
        data: data2,
        options: {
          maintainAspectRatio: false,
        }
    };

  const secondChart = new Chart(
    document.getElementById('fourthChart').getContext('2d'),
    config2
  );




  const data5 = {
    labels: [
      'Mama',
      'Prostata',
      'Pulmão'
  
    ],
    datasets: [{
      data: [245351, 199605, 103010 ],
      backgroundColor: [
        '#F75D59',
        '#62b4cf',
        '#52c74e'
  
      ],
      hoverOffset: 4
    }]
    };
  

    const config5 = {
          type: 'doughnut',
          data: data5,
          options: {
            maintainAspectRatio: false,
          }
      };
  
    const fifthChart = new Chart(
      document.getElementById('fifthChart').getContext('2d'),
      config5
    );



    const nomesCancerMama = [ 'MAMILO E AREOLA', 'PORCAO CENTRAL DA MAMA', 'QUADRANTE SUPERIOR INTERNO DA MAMA', 'QUADRANTE INFERIOR INTERNO DA MAMA', 'QUADRANTE SUPERIOR EXTERNO DA MAMA', 'QUADRANTE INFERIOR EXTERNO DA MAMA', 'PROLONGAMENTO AXILAR DA MAMA', 'LESAO INVASIVA DA MAMA', 'MAMA , SOE']
    const data6 = {
      labels: ['C500', 'C501', 'C502', 'C503', 'C504', 'C505', 'C506', 'C508', 'C509'],
      datasets: [{
      label: 'Código de Neoplasia',
      backgroundColor: ['blue'],
      borderColor: 'blue',
      data: [ 3139, 4041, 6214, 4609, 26421, 4421, 1239, 11082, 184066],
      borderWidth: 1
      },

    ]
    };


    const config6 = {
      type: 'bar',
      data: data6,
      options: {
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              title: function(context) {
                console.log(context)
                return `${context[0].label} `;
              },
              afterTitle: function(context) {
                return `(${nomesCancerMama[context[0].dataIndex]})`;
              }
            }
          }
        }
      }
    };


    const sixthChart = new Chart(
      document.getElementById('sixthChart').getContext('2d'),
      config6
    );

  var abc = firstChart.data.datasets[0].backgroundColor[2]
  console.log(abc)


  const data3 = [

    {
      "Idade": 0,
      "Total": 1
    },
    {
      "Idade": 1,
      "Total": 1
    },
    {
      "Idade": 7,
      "Total": 1
    },
    {
      "Idade": 8,
      "Total": 1
    },
    {
      "Idade": 10,
      "Total": 1
    },
    {
      "Idade": 11,
      "Total": 1
    },
    {
      "Idade": 12,
      "Total": 1
    },
    {
      "Idade": 13,
      "Total": 5
    },
    {
      "Idade": 14,
      "Total": 2
    },
    {
      "Idade": 15,
      "Total": 4
    },
    {
      "Idade": 16,
      "Total": 14
    },
    {
      "Idade": 17,
      "Total": 18
    },
    {
      "Idade": 18,
      "Total": 28
    },
    {
      "Idade": 19,
      "Total": 47
    },
    {
      "Idade": 20,
      "Total": 80
    },
    {
      "Idade": 21,
      "Total": 130
    },
    {
      "Idade": 22,
      "Total": 150
    },
    {
      "Idade": 23,
      "Total": 181
    },
    {
      "Idade": 24,
      "Total": 216
    },
    {
      "Idade": 25,
      "Total": 336
    },
    {
      "Idade": 26,
      "Total": 400
    },
    {
      "Idade": 27,
      "Total": 553
    },
    {
      "Idade": 28,
      "Total": 679
    },
    {
      "Idade": 29,
      "Total": 812
    },
    {
      "Idade": 30,
      "Total": 1049
    },
    {
      "Idade": 31,
      "Total": 1200
    },
    {
      "Idade": 32,
      "Total": 1479
    },
    {
      "Idade": 33,
      "Total": 1733
    },
    {
      "Idade": 34,
      "Total": 1996
    },
    {
      "Idade": 35,
      "Total": 2277
    },
    {
      "Idade": 36,
      "Total": 2586
    },
    {
      "Idade": 37,
      "Total": 2877
    },
    {
      "Idade": 38,
      "Total": 3378
    },
    {
      "Idade": 39,
      "Total": 3597
    },
    {
      "Idade": 40,
      "Total": 4091
    },
    {
      "Idade": 41,
      "Total": 4563
    },
    {
      "Idade": 42,
      "Total": 4859
    },
    {
      "Idade": 43,
      "Total": 5226
    },
    {
      "Idade": 44,
      "Total": 5693
    },
    {
      "Idade": 45,
      "Total": 5847
    },
    {
      "Idade": 46,
      "Total": 6219
    },
    {
      "Idade": 47,
      "Total": 6410
    },
    {
      "Idade": 48,
      "Total": 6796
    },
    {
      "Idade": 49,
      "Total": 6638
    },
    {
      "Idade": 50,
      "Total": 6772
    },
    {
      "Idade": 51,
      "Total": 6557
    },
    {
      "Idade": 52,
      "Total": 6404
    },
    {
      "Idade": 53,
      "Total": 6336
    },
    {
      "Idade": 54,
      "Total": 6059
    },
    {
      "Idade": 55,
      "Total": 6139
    },
    {
      "Idade": 56,
      "Total": 5952
    },
    {
      "Idade": 57,
      "Total": 5880
    },
    {
      "Idade": 58,
      "Total": 5922
    },
    {
      "Idade": 59,
      "Total": 5885
    },
    {
      "Idade": 60,
      "Total": 5624
    },
    {
      "Idade": 61,
      "Total": 5459
    },
    {
      "Idade": 62,
      "Total": 5362
    },
    {
      "Idade": 63,
      "Total": 5242
    },
    {
      "Idade": 64,
      "Total": 5061
    },
    {
      "Idade": 65,
      "Total": 4859
    },
    {
      "Idade": 66,
      "Total": 4679
    },
    {
      "Idade": 67,
      "Total": 4454
    },
    {
      "Idade": 68,
      "Total": 4421
    },
    {
      "Idade": 69,
      "Total": 4282
    },
    {
      "Idade": 70,
      "Total": 3933
    },
    {
      "Idade": 71,
      "Total": 3872
    },
    {
      "Idade": 72,
      "Total": 3710
    },
    {
      "Idade": 73,
      "Total": 3662
    },
    {
      "Idade": 74,
      "Total": 3441
    },
    {
      "Idade": 75,
      "Total": 3261
    },
    {
      "Idade": 76,
      "Total": 3139
    },
    {
      "Idade": 77,
      "Total": 2880
    },
    {
      "Idade": 78,
      "Total": 2631
    },
    {
      "Idade": 79,
      "Total": 2556
    },
    {
      "Idade": 80,
      "Total": 2168
    },
    {
      "Idade": 81,
      "Total": 2014
    },
    {
      "Idade": 82,
      "Total": 1870
    },
    {
      "Idade": 83,
      "Total": 1723
    },
    {
      "Idade": 84,
      "Total": 1580
    },
    {
      "Idade": 85,
      "Total": 1379
    },
    {
      "Idade": 86,
      "Total": 1185
    },
    {
      "Idade": 87,
      "Total": 992
    },
    {
      "Idade": 88,
      "Total": 787
    },
    {
      "Idade": 89,
      "Total": 626
    },
    {
      "Idade": 90,
      "Total": 528
    },
    {
      "Idade": 91,
      "Total": 431
    },
    {
      "Idade": 92,
      "Total": 362
    },
    {
      "Idade": 93,
      "Total": 266
    },
    {
      "Idade": 94,
      "Total": 216
    },
    {
      "Idade": 95,
      "Total": 163
    },
    {
      "Idade": 96,
      "Total": 140
    },
    {
      "Idade": 97,
      "Total": 78
    },
    {
      "Idade": 98,
      "Total": 58
    },
    {
      "Idade": 99,
      "Total": 54
    },
    {
      "Idade": 100,
      "Total": 29
    },
    {
      "Idade": 101,
      "Total": 24
    },
    {
      "Idade": 102,
      "Total": 4
    },
    {
      "Idade": 103,
      "Total": 11
    },
    {
      "Idade": 104,
      "Total": 4
    },
    {
      "Idade": 105,
      "Total": 2
    },
    {
      "Idade": 106,
      "Total": 1
    },
    {
      "Idade": 108,
      "Total": 1
    },
    {
      "Idade": 109,
      "Total": 2
    },
    {
      "Idade": 110,
      "Total": 2
    },
    {
      "Idade": 113,
      "Total": 1
    },
    {
      "Idade": 114,
      "Total": 1
    },
  

]

const transformedData = data3.map(function(e){
  return e.Total;
});

const labels8 = data3.map(function(e){

  return e.Idade;
});

console.log(transformedData)


var ctx = document.getElementById("secondChart");
var chart = new Chart(ctx, {
type: "line",
data: {
labels: labels8,
datasets: [
{
    type: "line",
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1,
    label: "Obitos",
    data: transformedData,
}]
}
});