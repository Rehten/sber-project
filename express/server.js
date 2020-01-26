var cors = require('cors');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(cors());
app.use(bodyParser.json());

var entities = [];

function entityCreator(category, severity, id, dataFrom, dataTo) {
    return {
        category,
        severity,
        id,
        dataFrom,
        dataTo
    };
}

for (var i = 0; i < 1000; i++)
{
    var dateFrom = new Date() - new Date((i + 1) * Math.random() * 1000000000);
    var dateTo = new Date() - new Date(Math.random() * 10000000000);
    entities.push(
        entityCreator(
            `Category-${i%3 + 1}`,
            Math.round(Math.random() * 5),
            i,
            {
                day: new Date(dateFrom).getDate(),
                month: new Date(dateFrom).getMonth() + 1,
                year: new Date(dateFrom).getFullYear()
            },
            {
                day: new Date(dateTo).getDate(),
                month: new Date(dateTo).getMonth() + 1,
                year: new Date(dateTo).getFullYear()
            }
        )
    )
}

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/polygon', function (req, res) {
    var rslt = entities;

    if (req.body.category)
    {
        rslt = rslt.filter(entity => entity.category === req.body.category);
    }

    if (req.body.severity)
    {
        rslt = rslt.filter(entity => entity.severity === req.body.severity);
    }

    res.json({
        entities: rslt,
        total: rslt.length
    });
});

app.listen(3200, function () {
    console.log('Example app listening on port 3200!');
});
