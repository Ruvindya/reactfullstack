const express =require('express')
const app =express()

const db = require("./models");

db.sequelize.sync().then(() => {
//when we start our api first itgoes to our module and go over every single tables exits in module
//entry point of API
app.listen(3001,() =>{
    console.log("Server running on port 3001");
});

});
