module.exports = function (pool) {
    return{
        createDriver(phone,model,color,lat,lng,isonline, cb){
            pool.query("INSERT INTO drivers SET ?",
                {
                    phone,model,color,lat,lng,isonline
                }, cb);
        },
        setOnline(isonline,id,cb){
            pool.query("UPDATE drivers SET isonline= ? WHERE id = ? ",
                [isonline,id], cb);
        },
        findByDriver(isonline,cb){
            pool.query("SELECT * FROM drivers WHERE isonline = ?",
                [isonline], cb);
        },
        setGeoData(id,lat,lng,cb){
            console.log("driver");
            pool.query("UPDATE drivers SET lat= ?, lng = ? WHERE id = ? ",
                [lat,lng,id], cb);
        },
    }
};
