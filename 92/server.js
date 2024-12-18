const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    let cardTitle = "Hailee Steinfeld";
    let cardDesc = "Hailee Steinfeld is a american atress, I have worked in many web series and movies";
    let cardBtn = "Know more";

//   res.sendFile('templetes/index.html', {root: __dirname})

    res.render('index', {ct: cardTitle, cd: cardDesc, cb: cardBtn})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})