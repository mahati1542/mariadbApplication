const mariadb=require("mariadb");
const pool=mariadb.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'password123',
    database: 'login',
    connectionLimit:5
});
module.exports={
    getConnection(){
        return new Promise(function (res, rej) {
            pool.getConnection()
              .then(function (conn) {
                res(conn);
              })
              .catch(function (error) {
                rej(error);
              });
          });
    }
}