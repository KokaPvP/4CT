const fs = require("fs");
const dirname = "./"; //Katalog do odczytu

fs.readdir(dirname,(error,files)=>{
    if(error) console.log(error);
    else
    {
        console.log("Zawartosc katalogu: ");
        files.forEach(f=>console.log(f));
    }
});