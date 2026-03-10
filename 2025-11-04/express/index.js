const express = require('express');

const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    const {imie,nazwisko} = req.query;
    res.send(`
        <h4>To je moje chopie imie i chopie nazwisko</h4>
        imie: ${imie} <br/>
        nazwisko ${nazwisko} <br/>
        `);
});
app.listen(port,()=>console.log("Dzwi otwierają się z lewej storny"));