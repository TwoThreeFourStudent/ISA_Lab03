const dt = require('./modules/date')
const http = require('http');
const fs = require('fs');
let url = require('url')


http.createServer(function (request, response) {
    let serverTime = dt.getDate()
    let q = url.parse(request.url, true)
    let name = q.query["name"]
    response.writeHead(200, { "Content-Type": "text/html" })
    response.end(`<p style="color: blue;">Hello ${name}, What a beautiful day. Server current date and time is${serverTime}</p>`)
}).listen(8080);
console.log('listening ...');
