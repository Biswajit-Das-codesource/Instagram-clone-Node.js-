const express=require("express")
const { createpost, getalldata, getallcomment } = require("../controller/post")
const { check } = require("../middleware/auth")
const router=express.Router()

router.post("/post",check,createpost)
router.get("/posts",getalldata)
router.get("/usercomment",getallcomment)
module.exports=router