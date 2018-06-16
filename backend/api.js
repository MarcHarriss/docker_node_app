const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin" ,"http://localhost:8888");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Access");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('hello world');
});

app.post('/', function(req, res) {

    var body, headers, user, username, pass;

    body = req.body;
    headers = req.headers;
    user = false;
    username;
    pass = false;

    for (q in body) {
        if (q === 'username') {
            if (body[q] === 'admin') {
                user = true;
                username = body[q];
            }
        }
        if (q === 'password') {
            if (body[q] === 'password') {
                pass = true;
        }
        }

        if(user == true && pass == true) {
            res.sendStatus(200);
            res.end("You authenticated successfully: Hello " + username)
        }

        // res.write(`key of ${q} has value of body[${q}]`); 
    }

    if (pass == false || user == false) {
        res.sendStatus(403);
        res.end("You didn't succeed");
    }
});

app.listen(8000)