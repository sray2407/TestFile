//Creating all the routers in this fle and manage from here..
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.ejs')
})

module.exports = router 