const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
  res.render('index')  
})

app.get('/asking', (req, res) =>{
  res.render('asking')
})


const port = process.env.PORT | 8080
app.listen(port, () => {
  console.log("App is listening at port: ", port)
})