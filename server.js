require('./src/config/custom-express');
var mysql = require('mysql');

const port = 3000
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});

// const http = require('http');

// const server = http.createServer(function(req, resp){
//     resp.end(`<html><body><h2>
//         안녕~~
//     </h2></body>
//     </html>"`)
// });
// server.listen(port)