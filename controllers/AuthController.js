module.exports = function (driver) {
    return {
        index(req, res) {
                driver.setOnline(
                    req.body.isonline,
                    req.params.id,
                    call
                );

            function call(err, rows) {
                if (!err) {
                    res.send(200, {message: rows});
                }
            }
            //console.log(req.body);
        }
    }
};