module.exports = function (driver) {
    return{
       index(req,res){
           console.log(req.body);
          driver.createDriver(
              req.body.phone,
              req.body.model,
              req.body.color,
              req.body.lat,
              req.body.lng,
              req.body.isonline,
              (err, rows) =>{
                 //  var keys = Object.keys(rows);
                 // console.log(keys);
                  console.log(err);
                  res.status(201).json(rows);
              }
          );
        }
    }
};