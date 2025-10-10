// /home/fiveforyou/domains/fievel.54u.se/app.js
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'public_html', 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(process.env.PORT || 3000);