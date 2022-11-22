const express = require('express')
const app = express()
const http = require('http');
var mysql      = require('mysql');
const testRouter = require('./Router/test')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'testtt'
  });

  app.use(express.json())
//   app.use('/test', (req,res,next)=> connection.connect(function(err) {
//     if (err) throw err;
//     var sql = "SELECT * from aaa";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       res.status(200).send(result)
//     });
//   }))

  app.use('/test', testRouter);


  const server = http.createServer(app)
const port = process.env.port || 3000
server.listen(port, () => console.log("App working on port" + port + "..."))