type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
    initPickColor: function () {
        $('.pick-class-label').click(function () {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocChart: function () {
        chartColor = "#FFFFFF";

        // General configuration for the charts with Line gradientStroke
        gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };

        ctx = document.getElementById('lineChartExample').getContext("2d");

        gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

        myChart = new Chart(ctx, {
            type: 'line',
            responsive: true,
            data: {
                labels: ["Ene", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Active Users",
                    borderColor: "#f96332",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#f96332",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
                }]
            },
            options: gradientChartOptionsConfiguration
        });
    },

    initDashboardPageCharts: function (data1) {
        var data=data1

        gradientChartOptionsConfigurationWithTooltipBlue = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 2.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#2380f7"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#2380f7"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipPurple = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(225,78,202,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipOrange = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 110,
                        padding: 20,
                        fontColor: "#ff8a76"
                    },
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(220,53,69,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#ff8a76"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipGreen = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(0,242,195,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }]
            }
        };


        gradientBarChartConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 12,
                xPadding: 15,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 20,
                        suggestedMax: 120,
                        padding: 15,
                        fontColor: "#9e9e9e"
                    }
                }],

                xAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 15,
                        fontColor: "#9e9e9e"
                    },
                }]
            }
        };


            var total_casos=[data[9]['cases'],data[13]['cases'],data[17]['cases'],data[19]['cases'],data[20]['cases'],data[1]['cases']];
            var sumaCasos =0;
            total_casos.forEach(function (total) {
                sumaCasos+=total;
            });
            $('#total_casos').html('<i class="tim-icons icon-paper text-info"></i>'+sumaCasos);
            var ctxPurple = document.getElementById("chartLinePurple").getContext("2d");
            var gradientStrokePurple = ctxPurple.createLinearGradient(0, 230, 0, 50);

            gradientStrokePurple.addColorStop(1, 'rgba(72,72,176,0.2)');
            gradientStrokePurple.addColorStop(0.2, 'rgba(72,72,176,0.0)');
            gradientStrokePurple.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
            var myChart = new Chart(ctxPurple, {
                type: 'bar',
                responsive: true,
                legend: {
                    display: false
                },
                data: {
                    labels: [data[9]['country'],data[13]['country'], data[17]['country'],data[19]['country'], data[20]['country'], data[1]['country']],                    datasets: [{
                        label: "contagios",
                        fill: true,
                        backgroundColor: gradientStrokePurple,
                        borderColor: '#d048b6',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [data[9]['cases'],data[13]['cases'],data[17]['cases'],data[19]['cases'],data[20]['cases'],data[1]['cases']],


                    }]
                },
                options: gradientBarChartConfiguration
            });

        var total_recuperados=[data[9]['recovered'],data[13]['recovered'],data[17]['recovered'],data[19]['recovered'],data[20]['recovered'],data[1]['recovered']];
        var sumaRecuperados =0;
        total_recuperados.forEach(function (total) {
            sumaRecuperados+=total;
        });
        $('#total_recuperados').html('<i class="tim-icons icon-paper text-info"></i>'+sumaRecuperados);
        var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");
        var gradientStrokeGreen = ctxGreen.createLinearGradient(0, 230, 0, 50);

        gradientStrokeGreen.addColorStop(1, 'rgba(72,72,176,0.2)');
        gradientStrokeGreen.addColorStop(0.2, 'rgba(72,72,176,0.0)');
        gradientStrokeGreen.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        var myChart = new Chart(ctxGreen, {
            type: 'bar',
            responsive: true,
            legend: {
                display: false
            },
            data: {
                    labels: [data[9]['country'],data[13]['country'], data[17]['country'],data[19]['country'], data[20]['country'], data[1]['country']],                    datasets: [{
                    label: "Recuperados",
                    fill: true,
                    backgroundColor: gradientStrokeGreen,
                    borderColor: '#2dce89',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: [data[9]['recovered'],data[13]['recovered'],data[17]['recovered'],data[19]['recovered'],data[20]['recovered'],data[1]['recovered']],


                }]
            },
            options: gradientBarChartConfiguration
        });

        /*  CONTIAGADOS*/
       // fecha pero con un dia menos
        var fecha=moment().subtract(1,'d').format("YYYY-MM-DD");

        $.get("https://covid19.secuoyas.io/api/v1/es/ccaa?ultimodia=true", function (data2) {

        var casos=data2['timeline'][0]['regiones'];

            //bucle para sacar todos los nombres de las comunidades
            var labels=['AND','ARG','AST','BAL','CAN','CANT','CYM','CYL','CAT','CEU','VAL','EXT','GAL','MAD','MEL','MUR','NAV','PVA','LRJ'];



          //bucle para sacar todos los datos activos de cada comunidad
            var datos=[]
            for (var j = 0; j <casos.length ; j++) {
                datos[j]=casos[j]['data']['casosConfirmadosDiario'];
            }

            total_nuevos_contagios=datos;
            var sumaNuevosContagios=0;
            total_nuevos_contagios.forEach(function (totalNuevos) {
                sumaNuevosContagios+=totalNuevos
            })
            $('#total_nuevos').html('<i class="tim-icons icon-bell-55 text-warning"></i>'+sumaNuevosContagios);
            $('.fecha').text(fecha);


        var ctxCentral = document.getElementById("chartBig1").getContext("2d");
        var gradientStrokeCentral = ctxCentral.createLinearGradient(0, 230, 0, 50);

        gradientStrokeCentral.addColorStop(1, 'rgba(72,72,176,0.2)');
        gradientStrokeCentral.addColorStop(0.2, 'rgba(72,72,176,0.0)');
        gradientStrokeCentral.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        var myChart = new Chart(ctxCentral, {
            type: 'bar',
            responsive: true,
            legend: {
                display: false
            },
            data: {
                labels: labels,
                datasets: [{
                    label: "contagios",
                    fill: true,
                    backgroundColor: gradientStrokeCentral,
                    borderColor: '#ff8d72',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data:datos ,


                }]
            },
            options: gradientBarChartConfiguration
        });
        });





               /* MUERTES TOTALES POR PAISES*/

        var total_muertos=[data[9]['deaths'],data[13]['deaths'],data[17]['deaths'],data[19]['deaths'],data[20]['deaths'],data[1]['deaths']];
        var suma =0;
        total_muertos.forEach(function (total) {
            suma+=total;
        });
        $('#total_muertes').html('<i class="tim-icons icon-bell-55 text-danger"></i>'+suma);
            var ctxBlue = document.getElementById("CountryChart").getContext("2d");
            var gradientStrokeBlue = ctxBlue.createLinearGradient(0, 230, 0, 50);

        gradientStrokeBlue.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStrokeBlue.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStrokeBlue.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


            var myChart = new Chart(ctxBlue, {
                type: 'bar',
                responsive: true,
                legend: {
                    display: false
                },
                data: {
                    labels: [data[9]['country'],data[13]['country'], data[17]['country'],data[19]['country'], data[20]['country'], data[1]['country']],
                    datasets: [{
                        label: "Muertos",
                        fill: true,
                        backgroundColor: gradientStrokeBlue,
                        borderColor: '#1f8ef1',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [data[9]['deaths'],data[13]['deaths'],data[17]['deaths'],data[19]['deaths'],data[20]['deaths'],data[1]['deaths']],
                    }]
                },
                options: gradientBarChartConfiguration
            });
           /* FIN MUERTE TOTALES POR PAISES*/
    },

};
