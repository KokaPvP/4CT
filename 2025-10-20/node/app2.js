const url = require('url');
const adress = "https://pzs1.pszczyna.edu.pl/category/zastepstwa/";

const addr = url.parse(adress,true);

console.log(`
    host ${addr.host}
    href: ${addr.href}
    hostname: ${addr.hostname}
    path: ${addr.path}
    protocol: ${addr.protocol}
    `);