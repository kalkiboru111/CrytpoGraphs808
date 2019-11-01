// Gets data from the API

function getData(type, cb) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10&api_key={d2b45d5710fc09775ad795e0636b58145f76f195cc96def94c38b842c49138d2}")
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText))
        }
    };
}

// Retrives the table headers from the array provided by the API
function getTableHeadhers(obj) {
    var tableHeaders = []

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    })
    return `<tr>${tableHeaders}</tr>`;
}

// Retrives the data for the BTC Price chart
function getChartData(type) {
    var transactionsData = [];

    getData(type, function(data) {
        data = data.Data
        console.dir(data);
        var xAxisLabel = getTableHeadhers(data[0]);

        data.forEach(function(item) {
            var transactionsDatum = [];

            Object.keys(item).forEach(function(key) {
                transactionsDatum.push(`${item[key]}`);
            })

            transactionsData.push(`${transactionsDatum}`);

        })
    })

    return transactionsData;
}

// JS function which writes the data to the DOM
function writeToDocument(type) {
    var tableRows = [];

    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.Data
        console.dir(data);
        var tableHeaders = getTableHeadhers(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                dataRow.push(`<td>${item[key]}</td>`);
            })

            tableRows.push(`<tr>${dataRow}</tr>`);

            // document.getElementById("data").innerHTML += "<p>" + item.time + "</p>";
            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
        })
    })
}

queue()
    .defer(d3.json, "https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=10&api_key={d2b45d5710fc09775ad795e0636b58145f76f195cc96def94c38b842c49138d2}")
    .await(makeGraphs);

//Makes graph by formatting the data and calling the lineChart function
function makeGraphs(error, transactionsData) {

    var GraphData = [];
    var dateFormat = d3.time.format("%c");
    var numberFormat = d3.format('.2f');
    var lowestNum = transactionsData.Data[0]['close'];
    var highestNum = transactionsData.Data[0]['close'];
    console.log(lowestNum)
    console.log(highestNum)

    for (var i = 0; i < transactionsData.Data.length; i++) {
        var newObject = {};
        newObject.time = transactionsData.Data[i]['time']
        newObject.close = transactionsData.Data[i]['close'];
        if (transactionsData.Data[i]['close'] < lowestNum){
            lowestNum = transactionsData.Data[i]['close'];
        };
        if (transactionsData.Data[i]['close'] > highestNum){
            highestNum = transactionsData.Data[i]['close'];
        };
        newTime = newObject.time
        GraphData.push(newObject);
    }
    
    timeFormat(GraphData)
    lineChart(GraphData, lowestNum, highestNum);

}

function timeFormat(GraphData){
    GraphData.forEach(function(d) { d.newTime = new Date(d.time * 1000); 
        d.newTime = d.newTime.getHours();
    });
    console.log(GraphData)
}

// A DC function which builds the line chart
function lineChart(data, lowestNum, highestNum){
    var ndx = crossfilter(data);
    var runDim = ndx.dimension(dc.pluck("newTime"));  
    var runGroup = runDim.group().reduceSum(dc.pluck("close"));
    
    // for (var i = 0; i < runGroup.length; i++) {
    //     var closeObject = {}
    // }
    // var minClose = runGroup.bottom(1)[0];
    // var maxClose = runGroup.top(1)[0];
    var chart = dc.lineChart("#chart-here")  /* The Div you want to Draw your graph in*/
        .width(900)
        .height(500)
        .margins({top: 20, right: 50, bottom: 100, left: 80})
        .x(d3.scale.ordinal())
        .y(d3.scale.linear().domain([lowestNum, highestNum]))
        .xUnits(dc.units.ordinal)
        .brushOn(false)
        .xAxisLabel('Time (hours)')
        .yAxisLabel('BTC Price')
        .dimension(runDim)
        .group(runGroup);

    dc.renderAll();
}


    // for (var i = 0; i < transactionsData.Data.length; i++) {
    //     var newObject = {};
    //     newObject.time = transactionsData.Data[i]['time']
    //     newObject.close = transactionsData.Data[i]['close']
    //     newTime = newObject.time
    //     GraphData.push(newObject);

    // }
    // // Formatting time field (converting from Unix timestamp to y/m/d format)
    // GraphData.forEach(function(d) { d.newTime = new Date(d.time * 1000) });



    // var ndx = crossfilter(GraphData);
    // var date_dim = ndx.dimension(function(d) {return d.newTime;});
    // var close = date_dim.group().reduceSum(dc.pluck('close'));
    // var minDate = date_dim.bottom(1)[0];
    // var maxDate = date_dim.top(1)[0];

    // console.log(date_dim)

    // dc.barChart("#chart-here")
    //     .width(1000)
    //     .height(300)
    //     .margins({ top: 10, right: 50, bottom: 30, left: 50 })
    //     .dimension(date_dim)
    //     .group(close)
    //     .transitionDuration(500)
    //     .x(d3.time.scale().domain([minDate, maxDate]))
    //     .xAxisLabel("Time")
    //     .yAxis().ticks(4);

//     dc.lineChart("#chart-here")
//         .width(1000)
//         .height(500)
//         .margins({ top: 20, right: 10, bottom: 20, left: 50 })
//         .dimension(date_dim)
//         .group(close)
//         .transitionDuration(500)
//         .x(d3.time.scale().domain([minDate, maxDate]).range)
//         .xAxisLabel("Time")
//         .yAxisLabel("Total Volume of BTC traded @ Close")
//         .elasticY(true)
//         .yAxis().ticks(4);

//     dc.renderAll();
// }


