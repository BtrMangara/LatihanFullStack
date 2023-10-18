const userRoute= require("express").Router();

const userController = require("../controllers/userController");

userRoute.get("/",userController.getUser);
userRoute.post("/Register",userController.register);
userRoute.post("/Login",userController.login);
userRoute.put("/update/:id",userController.update);
userRoute.delete("/delete/:id",userController.delete);
userRoute.get("/getDetails/:id",userController.getDetails);

module.exports = userRoute