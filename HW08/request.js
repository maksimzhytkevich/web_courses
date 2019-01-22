$("#get").click(function () {
    $.get("https://services.odata.org/V4/TripPinServiceRW/People", function (data) {
            console.log(data);
            showTable(data.value);
        })
        .fail(function () {
            alert("Something get wrong(");
        });
});

function showTable(data, mode) {
    var myHTMLStr = '<table>';
    if (mode == 'NAME_ONLY') {
        myHTMLStr += '<th>FirstName</th>';
        if (Array.isArray(data)) {
            for (var i in data) {
                myHTMLStr += '<tr><td>' + data[i]['FirstName'] + '</td></tr>';
            }
        } else {
            myHTMLStr += '<tr><td>' + data.FirstName + '</td></tr>';
        }
    } else {
        myHTMLStr += '<th>FirstName</th><th>Gender</th><th>LastName</th><th>UserName</th>';
        if (Array.isArray(data)) {
            for (var i in data) {
                myHTMLStr += '<tr><td>' + data[i]['FirstName'] + '</td><td>' +
                    data[i]['Gender'] + '</td><td>' +
                    data[i]['LastName'] + '</td><td>' +
                    data[i]['UserName'] + '</td></tr>';
            }
        } else {
            myHTMLStr += '<tr><td>' + data.FirstName + '</td><td>' +
                data.Gender + '</td><td>' +
                data.LastName + '</td><td>' +
                data.UserName + '</td></tr>';
        }
    }
    myHTMLStr += '</table>';
    document.getElementById('main').innerHTML = myHTMLStr;
}

$("#count").click(function () {
    $.get("https://services.odata.org/V4/TripPinServiceRW/People/$count", function (data) {
        console.log(data);
        alert('Number of entries: ' + data);
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#expand").click(function () {
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$expand=Friends", function (data) {
        console.log(data);
        alert('To see friends go to console)');
        showTable(data.value);
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#orderBy").click(function () {
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$orderby=FirstName", function (data) {
        console.log(data);
        showTable(data.value);
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#search").click(function () {
    var name = document.getElementById('forSearch');
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$search=" + name.value, function (data) {
        console.log(data);
        showTable(data.value);
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#select").click(function () {
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$select=FirstName", function (data) {
        console.log(data);
        showTable(data.value, 'NAME_ONLY');
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#skip").click(function () {
    var skip = document.getElementById('forSkip');
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$skip=" + skip.value, function (data) {
        console.log(data);
        showTable(data.value);
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#top").click(function () {
    var top = document.getElementById('forTop');
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$top=" + top.value, function (data) {
        console.log(data);
        showTable(data.value);
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#filter").click(function () {
    var firstLetter = document.getElementById('forFilter');
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$filter=startswith(FirstName,'" + firstLetter.value + "')", function (data) {
        console.log(data);
        showTable(data.value);
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#cFilter").click(function () {
    var firstLetter1 = document.getElementById('forFilter1');
    var firstLetter2 = document.getElementById('forFilter2');
    var firstLetter3 = document.getElementById('forFilter3');
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$filter=startswith(FirstName,'" + firstLetter1.value + "') or startswith(FirstName,'" + firstLetter2.value + "') or startswith(FirstName,'" + firstLetter3.value + "')", function (data) {
        console.log(data);
        showTable(data.value);
    }).fail(function () {
        alert("Something get wrong(");
    });;
});

$("#cStrParam").click(function () {
    $.get("https://services.odata.org/V4/TripPinServiceRW/People?$select=FirstName&$top=5&$orderby=FirstName", function (data) {
        console.log(data);
        showTable(data.value, 'NAME_ONLY');
    }).fail(function () {
        alert("Something get wrong(");
    });;
});