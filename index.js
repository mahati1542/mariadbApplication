const cors=require("cors");
const express=require('express');
const http=require('http');
const bodyparser=require('body-parser');
const app=express();
debugger;
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json({type:'*/*'}))
app.use('/api/users',require('./routes/user'));
const port=3080;
const server=http.createServer(app);
server.listen(port);
console.log('Server listening on',port);