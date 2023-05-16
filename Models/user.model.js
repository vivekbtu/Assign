
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email: String,
    mobile: String,

})
const Usermodel = mongoose.model("item", userSchema)

module.exports = {Usermodel};