module.exports = function (user) {
    return{
        index(req,res){
            user.createUser(
                req.body.phone,
                req.body.lng,
                req.body.lat,
                (err, rows) =>{
                    // var keys = Object.keys(rows);
                    // console.log(keys);
                    console.log(err);
                    res.status(201).json(rows.message);
                }
            );
        }
    }
};