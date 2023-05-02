const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

const chefsData = require('./data/chefsData.json')
const chefRecipe = require('./data/ChefRecipe.json')

app.use(cors())

app.get('/', (req,res)=>{
    res.send("Chef's server")
})

app.get('/chefs', (req, res)=>{
    res.send(chefsData)
})

app.get('/chef-recipes/:id', (req, res)=>{
    const id = req.params.id;
    const chef = chefsData.find(chef=> chef.id === +id)
    res.send(chef)
})

app.listen(port, ()=>{
    console.log(`Chef's server Running on port: ${port}`)
})