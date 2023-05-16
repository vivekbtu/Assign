
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },

})
const Usermodel = mongoose.model("item", userSchema)

module.exports = {Usermodel};