const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000
const path=require("path")
const cookieParser = require('cookie-parser')
const routes=require("./routes/routes")
const staticrouter=require("./routes/static")
const create=require("./routes/post")
const { check, checkauth } = require('./middleware/auth')
mongoose.connect("mongodb://localhost:27017/instagram").then(()=>console.log("mongodb connected")).catch((err)=>console.log(err))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use("/",routes)
app.use("/",staticrouter)
app.use("/",checkauth,create)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))