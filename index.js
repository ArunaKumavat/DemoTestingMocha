var app = app || {} ;

app.jsonString = '';
app = {

    rawFile: new XMLHttpRequest(),
    url: 'https://gist.githubusercontent.com/hadimichael/6c4c1782303704103d71/raw/5fa3fa4f6a81da206965563e77e100288bb06f8e/gistfile1.txt',

    readTextFile: function(textToJSON){
                        app.rawFile.open("GET", app.url, false);
                        app.rawFile.onreadystatechange = function ()
                        {
                            if(app.rawFile.readyState === 4)
                            {
                                if(app.rawFile.status === 200 || app.rawFile.status == 0)
                                {
                                    app.jsonString = textToJSON(app.rawFile.responseText);
                                }
                            }
                        }
                        app.rawFile.send(null);
                    },
};

app.readTextFile(function(value){
    var lines;
    var station_id = [];
    lines = value.split('\n');
    lines.forEach(function (line, index) {
    var properties = line.split(' ');
        properties = properties.filter(Boolean)
            station_id.push(properties[0]);
        });

    return station_id.reduce(function(o, v, i) {
        obj[i] = v;
        return obj;
    }, {});
});

  // console.log(app.jsonString);
