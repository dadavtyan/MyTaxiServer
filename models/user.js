module.exports = function (pool) {
    return{
        createUser(phone,lat,lng, cb){
            pool.query("INSERT INTO users SET ?",
                {phone,lat,lng}, cb);
        },
        findByUser(phone,cb){
            pool.query("SELECT * FROM users WHERE (phone =?)",
                {phone}, cb);
        },
        setGeoData(id,lat,lng,cb){
            console.log("user");
            pool.query("UPDATE users SET lat =?, lng =? WHERE id =? ",
                [lat,lng,id], cb);
        },
    }
};
