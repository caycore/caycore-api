var express = require("express");
var cors = require("cors");
var r = require('rethinkdbdash')({
    servers: [
        {
            host: 'localhost',
            port: 28015
        }
    ]
});

var app = express();

app.use(cors());

app.get("/getTeam", async (req, res) => {
    r.db("caycore").table("team").then((team) => {
        res.statusCode = 200;
        res.send({
            message: "Fetch success.",
            code: 200,
            payload: team
        });
    }).catch((err) => {
        res.statusCode = 500;
        res.send({
            message: err.message,
            code: 500,
            payload: err
        });
    });
});

app.listen(4444);
