const express = require('express')
const app = express()

const blog = require('./routes/blog')

const port = 3000

app.use('/blog', blog)

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log("This is a get request")
  res.send('Hello World!')
})

// --------------- to rest api by using html file --------------- 
app.post('/', (req, res) => {
  console.log("This is a post request")
  res.send('This is a post request')
})
// app.put
// app.delete
// --------------- to rest api by using html file ---------------


// ******************************** test request using postman ********************************
// by entering this url in postman http://localhost:3000/deletereq
app.delete('/deletereq', (req, res) => {
  console.log("This is a post request")
  res.send('This is a delete request')
})
// ******************************** test request using postman ********************************


// **************************** to serve a html page ****************************
app.get('/index', (req, res) => {
  console.log("This is a get request")
  res.sendFile('templetes/index.html', {root: __dirname})
})
// **************************** to serve a html page ****************************


app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3, d:4, name:["jaydeep", "jd", "august"]});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})