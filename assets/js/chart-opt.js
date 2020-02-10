        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['num1', 'num2', 'num3'],
                datasets: [{
                    //label: '# of Votes',
                    data: [5, 3, 8],
                    backgroundColor: [
                        '#fda152',
                        '#3c1c93',
                        '#68c0ff',
                    ],
//                    borderColor: [
//                        'rgba(255, 99, 132, 1)',
//                        'rgba(54, 162, 235, 1)',
//                        'rgba(255, 206, 86, 1)',
//                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                //cutoutPercentage: 80,
                responsive: false,
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var precentage = Math.floor(((currentValue / total) * 100) + 0.5);
                            return precentage + "%";
                        }
                    }
                },
                legendCallback: function (chart) {
                    var sum = 0;
                    var text = [];
                    for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                        sum += chart.data.datasets[0].data[i];
                    }
                    
                    


                    text += `<ul class="chart-legends">`;

                    for (var i = 0; i < chart.data.datasets[0].data.length; i++) {

                        text += `<li> <div class="span-test" id="item-${i}" style="background-color:${chart.data.datasets[0].backgroundColor[i]}"></div>${chart.data.labels[i]} : ${chart.data.datasets[0].data[i]/sum*100+' %'} 
                        </li>`;
                        //console.log(chart.data.datasets[0].data[i]);
                        //console.log(chart.data.datasets[0].backgroundColor[i]);
                    }
                    //console.log(sum);

                    text += `</ul>`;
                    return text;
                    //console.log(text);
                },
            },

        });


        document.getElementById('chart-legends').innerHTML = myChart.generateLegend();
