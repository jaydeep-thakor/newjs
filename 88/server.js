const express = require('express')
const app = express()
const port = 3000


// it will allow use to access file which is inside public folder
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Website main landing page')
})


// *********************** not a good way to create url *********************** 
app.get('/contactUs', (req, res) => {
    res.send('Contact us page')
})
app.get('/aboutUs', (req, res) => {
    res.send('About us page')
})
// *********************** not a good way to create url ***********************


// *********************** better way to create url ***********************
app.get('/blog/:slug', (req, res)=>{
    // console.log(req);

    // for url      http://localhost:3000/blog/intro-to?mode=dark&region=In
    console.log(req.params); // will output this { slug: 'intro-to' }
    console.log(req.query); // will output this { mode: 'dark', region: 'In' }

    res.send(`Hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second', (req, res)=>{
    res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})
// *********************** better way to create url ***********************

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})