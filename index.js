const express = require("express");
const app = express();
const User = require("./database");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));

app.get("/", async(req, res)=>{
   const users = await User.find({});
   res.render("home",{
    title:"ytrytyutuu",
    users:users
   })
})

app.post("/submit", async(req, res)=>{
    const {name,email,phone} = req.body;
    const newuser = new User({name,email,phone});
    const usersave = await newuser.save();
    res.redirect("/");
})
app.get("/contact", (req,res)=>{
    res.render("contact");
})
app.get("/edit/:id", async(req,res)=>{
    const {id} = req.params;
    const user = await User.findById({_id:id});
    if(user==null){
        res.redirect("/");
    }else{
        res.render("edit", {
            user:user
        })
    }
})

app.post("/update/:id", async(req,res)=>{
    const {id} = req.params;
    const {name,email,phone} = req.body;
    const updateuser = await User.findByIdAndUpdate({_id:id},{name,email,phone},{new:true})
    res.redirect("/");
})
app.get("/delete/:id", async(req,res)=>{
    const {id} = req.params;
    const deleteitems =await User.findByIdAndDelete({_id:id});
    res.redirect("/");
})


app.listen(3000, ()=>{
    console.log("server running on 3000");
})