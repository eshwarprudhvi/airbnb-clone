const { required } = require("joi");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },

})

//username and password automatically  provided by passport local mongoose

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);