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

const config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: data,
    },
    options: {
    }
};

const firstChart = new Chart(
document.getElementById('firstChart').getContext('2d'),
config
);


var config2 = {
    type: 'doughnut',
    data:{
        labels: data2[0].labels,
        datasets: data2},
    options: {
        maintainAspectRatio: false,
    }
};

const secondChart = new Chart(
document.getElementById('secondChart').getContext('2d'),
config2
);


const config3 = {
    type: 'pie',
    data:{
        labels: data3[0].labels,
        datasets: data3},
    options: {
        maintainAspectRatio: false,
    }
};

const fouthChart = new Chart(
document.getElementById('fouthChart').getContext('2d'),
config3
);  


const config4 = {
    type: 'line',
    data: {
        labels: labels,
        datasets: data4,
    },
    options: {
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: true,
          }
        },
        interaction: {
          intersect: false,
        }
      },
};

const thirdChart = new Chart(
document.getElementById('thirdChart').getContext('2d'),
config4
);