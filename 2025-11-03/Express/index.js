const express = require('express');
const serwerLogs = require('./serwerLogs');

const app = express();
const port = 8080;

//Ścieżki do plików strony
const main = "index.html";
const css = "main.css";
const js = "main.js";

app.get('/',(req,res)=>{
    res.sendFile(main,{root: __dirname + "\\strona"});
    serwerLogs.show(main,req);

    //const q = req.query.q;
    //const client = req.query.sclient;
});

app.get('/main.css',(req,res)=>{
    res.sendFile(css,{root: __dirname + "\\strona"});
    serwerLogs.show(css,req);
});

app.listen(port);