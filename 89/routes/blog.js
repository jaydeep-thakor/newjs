const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
  res.send('Blog home page')
})

router.get('/aboutBlog', (req, res) => {
    res.send('Blog about page')
  })

router.get('/contactBlog', (req, res) => {
    res.send('Blog contact page')
})

module.exports = router