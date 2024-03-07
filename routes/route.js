const express = require("express");
const { createUser,Allusers, updataUser, deleteUser} = require("../controllers/user");

const route = express.Router()

//routes 
route.get("/users",Allusers);
route.post("/create", createUser);
route.put("/update/:id",updataUser)
route.delete("/delete/:id",deleteUser)

module.exports = {route};
