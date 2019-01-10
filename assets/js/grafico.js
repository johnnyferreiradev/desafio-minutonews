google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Editorias mais acessadas');
    data.addColumn('number', 'Acessos (%)');

    data.addRows([
        [{ v: [8, 0, 0], f: 'Governo' }, 75],
        [{ v: [9, 0, 0], f: '9 am' }, 50],
        [{ v: [10, 0, 0], f: '10 am' }, 45],
        [{ v: [11, 0, 0], f: '11 am' }, 30],
        [{ v: [12, 0, 0], f: '12 pm' }, 25],
    ]);

    var options = {
        title: '',
        hAxis: {
            title: '',
            format: '',
            viewWindow: {
                min: [0, 30, 0],
                max: [30, 50, 200]
            }
        }
        // ,
        // vAxis: {
        //   title: 'Rating (scale of %)'
        // }
    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

    chart.draw(data, options);
}