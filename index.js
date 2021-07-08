require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static(__dirname));

app.use(express.static('public'))

const port = process.env.port | 8000
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
app.set('view engine', 'ejs')

console.log("starting server")
app.get('/', (req, res) =>{
  res.render('index')
})

app.get('/results', (req, res) =>{
  res.render('results')
})
