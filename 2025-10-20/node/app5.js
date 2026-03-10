const fs = require('fs');
let data = " czasy lepsze niż dzisiaj! za każdym razem gdy mówie chałpa mam na myśle te lepsze czasy takie jak kiedyś były. kiedyś to było";
fs.appendFile("chopie.txt",data,(error)=>{});

console.log(fs.readFileSync("chopie.txt","utf-8"));