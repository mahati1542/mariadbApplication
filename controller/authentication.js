const userModel=require('../model');

function GetSortedOrder(prop) {
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    }
const getAllDetails=async(req,res)=>{
    let listData=await userModel.listData();
    const namedData=listData.filter((item)=>item!='meta');
    const sortedData= namedData.sort(GetSortedOrder("Name"));
    console.log(sortedData);
    res.send(sortedData);
}
const getDetailsById=async(req,res,id)=>{
    let selecteddata=await userModel.read(id);
    res.send(selecteddata);
}
const getDetailsByRole=async(req,res)=>{
    let validData = await userModel.areValidCredentials(req.body.Email, req.body.passwd);
    if(validData.isValid){
     
     if(validData.rowData.role==="ADMIN"){
        let userData = await userModel.read(validData.rowData.Id);
        let listData = await userModel.listData();
        res.send({
            user: userData,
            data: listData,
            type: "ADMIN",
        });
      }
      else if(validData.rowData.role==="EMPLOYEE"){
        let userData = await userModel.read(validData.rowData.Id);
        res.send({
            user: userData,
            type: "USER",
        })
      }
    }
    else{
        res.send("Invalid Credentials");
    }
}
module.exports={
    getAllDetails,getDetailsById,getDetailsByRole
}