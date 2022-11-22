const connection = require('../Config/dbConfig')

const getAll = async (req,res,next)=> {
    await  connection.connect( async function(err) {
        if (err) throw err;
        var sql = "SELECT * from aaa";
     await   connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
          res.status(200).send(result)
        });
      })

}

module.exports= {getAll}