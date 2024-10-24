const datamodel = require("../models/post");


async function createpost(req,res) {
const body=req.body
   const postdata= await datamodel.create({
        title:body.title,
        para:body.para,
        createdby:req.user._id  
   })
   if(!postdata) return res.redirect("/post")
   res.send("your post posted succesfully")
}
async function getalldata(req,res) {
     const userdatas=await datamodel.find({})
     res.render("allpost",{
          alldata:userdatas
     })
}

async function getallcomment(req,res) {
     const usercomment = await datamodel.find({createdby:req.user._id})
     res.render("all",{
          allcomment:usercomment
     })
}


module.exports={
    createpost,
    getalldata,
    getallcomment
}