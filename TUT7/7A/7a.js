const http = require('http');
const url = require('url');
var fs = require('fs');

const requestListener = function (req, res) {
    const query = url.parse(req.url, true).query;

    if (!('do' in query) || !('first' in query) || !('second' in query)) {
        fs.readFile('instructions.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length});
            res.write(data);
            return res.end();
        });
        return;
    }
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);

    const doData = query['do'];
    let first = null;
    let second = null;
    try {
        first = parseFloat(query['first']);
        second = parseFloat(query['second']);
    } catch {
        return res.end(`
        <html><body><h1>
            Incorrect numbers
        </h1></body></html>
    `);
    }
    let result = '';

    switch (doData) {
        case 'add':
            result = first + second;
            break;
        case 'div':
            result = first / second;
            break
        case 'mul':
            result = first * second;
            break;
        case 'sub':
            result = first - second;
            break;
        default:
            return res.end(`
        <html><body><h1>
            The "do" does not exists
        </h1></body></html>
    `);
    }

    res.end(`
        <html><body><h1>The result is ${result}</h1></body></html>
    `);
}

const server = http.createServer(requestListener);
server.listen(8080);