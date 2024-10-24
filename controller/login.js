const { setuser } = require("../jwtset");
const usermodel = require("../models/usermodel");

async function signup(req,res) {
    const {username,password,email}=req.body
  await usermodel.create({
        username:username,
        password:password,
        email:email,
    })
    res.render("login")
}
async function login(req,res) {
    const {username,password}=req.body
    const user=await usermodel.findOne({username,password})
    if(!user) return res.redirect("/")
    const token= setuser(user)
    res.cookie("uid",token)
    res.redirect("/home")
}

async function logout(req,res) {
    res.clearCookie("uid")
    res.redirect("/")
}
module.exports={
    signup,
    login,
    logout
}