const itemRoute = require("express").Router();

const ItemController = require("../controllers/itemController");

itemRoute.get("/",ItemController.getItems);
itemRoute.post("/create",ItemController.create);
itemRoute.put("/update/:id",ItemController.update);
itemRoute.delete("/delete/:id",ItemController.delete);
itemRoute.get("/getDetails/:id",ItemController.getDetails);

module.exports = itemRoute