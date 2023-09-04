// const https = require("http")
// const fs = require("fs")

// const app = (req,res) => {
//     https.writeHead(200,{'Content-Type' : 'text/html'});
//     fs.readFile('index.html',null, function(err,data) {
//         if(err){
//             https.writeHead(404);
//             https.write("File not found.")
//         }
//         else {
//             https.write(data)
//         }
//         https.end();
//     });
// }

// https.createServer(app).listen(8000)


// ************
// 2nd way
// ************

// const https = require('http')
// const fs = require('fs')
// const file = fs.readFileSync('index.html')

// const server = https.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type':'text.html'});
//     res.end(file)
// })

// const PORT = 8000;

// server.listen(PORT, '127.0.0.1', ()=> {
//     console.log("Listening on 8000")
// })

const express = require("express");
const app = express();

app.use(express.static('public'))

app.get("/",(req,res) => {
    res.render("index")
})

app.listen(3000)

