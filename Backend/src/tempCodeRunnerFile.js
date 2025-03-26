const express = require('express');
const aiRoutes = require('./routes/ai.routes');

const app = express(); //create a new instance of the server

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use('/ai',aiRoutes);

module.exports = app;