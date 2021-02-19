const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
    let user = models.Users.build({
        username: req.body.username,
        password: req.body.password
    })
    user.save().then(savedUser => console.log(savedUser))
})

module.exports = router