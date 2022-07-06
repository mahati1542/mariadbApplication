require("dotenv").config();
module.exports={
    DB:process.env.DB_HOST,
    SECRET:process.env.APP_SECRET,
    PORT:process.env.PORT
}