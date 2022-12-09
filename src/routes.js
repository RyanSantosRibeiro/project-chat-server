const express = require('express');

const routes = express.Router();

routes.get('/', (req,res)=>{
    res.json({message:"Hello word"})
});
// routes.post('/users', UserController.store);


module.exports = routes;