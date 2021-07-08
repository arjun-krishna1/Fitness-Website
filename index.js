const express = require('express')
const app = express()

app.listen()

app.get('/', (res,req) =>{
  res.render('index')  
})

app.get('/asking', (res, req) =>{
    res.render('asking')
})