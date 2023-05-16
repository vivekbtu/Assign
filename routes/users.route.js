
const express = require("express");

const {Usermodel} = require("../Models/user.model");

const userRouter = express.Router();

// get method
// items/ 
userRouter.get("/", async(req,res) => {
    // const params = req.query;
    try{
        const users = await Usermodel.find();
        res.send(users);
    }
    catch(err){

        res.send("Something error in get method");
        console.log(err);
    }
    
})

// post method
// items/create
userRouter.post("/create", async(req,res) => {

    try{
        const data = req.body;
        await Usermodel.insertMany([data])

        // 2nd way to add data 
        // const user = new Usermodel(data);
        // await user.save()
        // 2nd way to add data end

        res.send("Data create");
    }
    catch(err){
        console.log(err);
        res.send("Something error in post Method");
    }
})

// patch method
// items/update/{id}
userRouter.patch("/update/:userID", async(req,res) => {

    const Id = req.params.userID;
    const payload = req.body;

    try{
        const query = await Usermodel.findByIdAndUpdate({_id : Id}, payload);
        res.send("Data Updated");
    }
    catch(err){
        console.log(err);
        res.send(" Something error in Patch Method");
    }
})

// delete method
// items/delete/{id}
userRouter.delete("/delete/:userID", async(req,res) => {

    const Id = req.params.userID;

    try{
        const query = await Usermodel.findByIdAndDelete({_id: Id});
        res.send("User deleted successfully");
    }
    catch(err){
        res.send("Something error in Delete Method")
        console.log(err);
    }
})

module.exports = {userRouter};

