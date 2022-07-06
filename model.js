pool=require("./database/dbFile.js");

module.exports={
    async listData(){
        debugger;
        try{
             let conn=await pool.getConnection();
             sql = "SELECT Id,Name,Email,passwd,role FROM user";
             const rows = await conn.query(sql);
             conn.end();
             return rows;
           } catch (err) {
             throw err;
           }
        },
      async read(Id){
        try{
          let conn = await pool.getConnection();
          sql = "SELECT Id,Name,Email,passwd,role FROM user WHERE Id = ?";
          const rows = await conn.query(sql, Id);
          conn.end();
          if (rows.length == 1) {
            return rows[0];
          } else {
            return false;
          }
        }
        catch(err){
           throw err;
        }
      },
      async areValidCredentials(email, password) {
        debugger;
        try {
          conn = await pool.getConnection();
          sql = "SELECT * FROM user WHERE Email = ?";
          const rows = await conn.query(sql, email);
          conn.end();
          if (rows.length == 1 && rows[0].passwd === password) {
            let params={
              isValid:true,
              rowData:rows[0]
            }
            return params;;
          } else {
            return false;
          }
        } catch (err) {
          throw err;
        }
      }
       
}