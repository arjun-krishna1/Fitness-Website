require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static(__dirname));


app.use(express.static('public'))
app.listen(process.env.PORT)
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
res.render('index')
})

app.get('/results', (req, res) =>{
  res.render('results')
})
