function getData(type, cb) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=10&api_key={d2b45d5710fc09775ad795e0636b58145f76f195cc96def94c38b842c49138d2}")
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText))
        }
    };
}

function getTableHeadhers(obj) {
    var tableHeaders = []

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    })
    return `<tr>${tableHeaders}</tr>`;
}

// Get Chart data //
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


//Make Chart
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

//Make graph
function makeGraphs(error, transactionsData) {

    var TD = [];
    console.log(TD);

    for (var i = 0; i < transactionsData.Data.length; i++) {
        var newObject = {};
        newObject.time = transactionsData.Data[i]['time']
        newObject.close = transactionsData.Data[i]['close']
        TD.push(newObject);
    }

    var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S");
    var numberFormat = d3.format('.2f');

    TD.forEach(function(d) {
        d["time"] = new Date(d["time"])
    });

    var ndx = crossfilter(TD);
    var date_dim = ndx.dimension(dc.pluck('time'));
    var minDate = date_dim.bottom(1)[0];
    var maxDate = date_dim.top(1)[0];
    var close = date_dim.group().reduceSum(dc.pluck('close'));
    console.log(minDate)
    console.log(minDate)

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
    
    dc.barChart("#chart-here")
        .width(1000)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(date_dim)
        .group(close)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Time")
        .yAxis().ticks(4);

    dc.renderAll();
}
