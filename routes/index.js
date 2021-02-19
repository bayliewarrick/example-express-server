const express = require('express')
const router = express.Router()

router.get('/', async(req, res) => {
    res.send('Welcome, API V1.0')
})

module.exports = router