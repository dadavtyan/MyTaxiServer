module.exports = function (driver, user) {
    return {
        setData(req, res) {
            if (req.params.type === "driver"){
                driver.setGeoData(
                    req.body.id,
                    req.body.lat,
                    req.body.lng, call
                );
            }

            else {
                console.log(Object.keys(req.body));
                console.log(`req.user: ${JSON.stringify(req.body)}`);
                user.setGeoData(
                    req.body.id,
                    req.body.lat,
                    req.body.lng,
                    call
                );
            }

            function call(err, rows) {
                if (!err) {
                    res.status(200).json({
                        message: 'Update'
                    });
                }
            }

        }
    }
};