module.exports = function (driver) {
    return {
        async search(req, res) {
            var dDefault = 1;
            await driver.findByDriver(1, (err, rows) => {
                if (err) throw new Error(err);
                else if (rows.length === 0) {
                    res.status(200).json({message: "empty driver"});
                    return;
                }
                console.log(rows);
                res.status(200).json(rows);
            });
        },

        cancel(req, res) {
            res.status(200).json({
                message: 'Cancel Transaction'
            });
        },

        confirmed(req, res) {
            res.status(200).json({
                message: 'Confirmed User'
            });
        },

        successfully(req, res) {
            res.status(200).json({
                message: 'successfully'
            });
        }
    }
};