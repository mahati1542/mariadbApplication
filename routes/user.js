const router=require("express").Router();
debugger;
const {getAllDetails,getDetailsById,getDetailsByRole}=require("../controller/authentication");
router.get("/getAllDetails",async(req,res)=>{
  await getAllDetails(req,res);
});
router.get("/getDetails/:id",async(req,res)=>{
    await getDetailsById(req,res,req.params.id);
})

router.post("/login",async(req,res)=>{
    await getDetailsByRole(req,res);
});
module.exports=router;