const express = require("express");
const { createUser,Allusers, updataUser, deleteUser, getUserByQuery} = require("../controllers/user");

const route = express.Router()

//routes 
route.get("/users",Allusers);
route.post("/create", createUser);
route.put("/update/:id",updataUser);
route.delete("/delete/:id",deleteUser);
route.get("/results:name?",getUserByQuery)

module.exports = {route};
