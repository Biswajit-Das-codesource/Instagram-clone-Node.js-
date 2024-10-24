const jwt=require("jsonwebtoken")
const key="ajac"
function setuser(user){
 return jwt.sign({
        _id: user._id,
        username:user.username,
        password:user.password
    },key)
}

function getuser(token){
   return jwt.verify(token,key)
}


module.exports={
    setuser,
    getuser
}