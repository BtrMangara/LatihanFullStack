const route = require("express").Router();

route.get("/", (req, res) => {
    res.json({
        message : "Home Page"
    })
})


const itemRoutes = require('./item')
const userRoutes = require('./user')

route.use('/items', itemRoutes)
route.use('/users', userRoutes)

module.exports = route;