const { error } = require("console");
const fs = require("fs");

fs.readFile("chopie.txt","utf-8",(error,data)=>
{
    if(error) return console.log("erroren");
    console.log(data);
});