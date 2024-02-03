const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/usercrudapp").then(()=>{
    console.log("connection succesfully");
}).catch((e)=>{
    console.log(e);
});

const Schemacrud = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20
    },
    email:{
        type: String,
        required: true,
        minLength: 7,
        maxLength:25
    },
    phone:{
        type: Number,
        required: true,
        maxLength: 10
    },
    image:{
        type: String,
        require: true
    },
    created:{
        type:Date,
        require:true,
        default: Date.now,
    }
})

const usermodel = mongoose.model("User", Schemacrud);

module.exports = usermodel;
