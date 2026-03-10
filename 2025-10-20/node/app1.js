//importowanie i exportowanie modułów
const os = require('os');
console.log(
    `
    wersja os: ${os.version()}
    typ: ${os.type()}
    uptime: ${os.uptime()}
    platform: ${os.platform()}
    release: ${os.release()}
    hostname: ${os.hostname()}
    totalmem: ${os.totalmem()}
    `
);