const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
    let user = models.Users.build({
        username: req.body.username,
        password: req.body.password
    })
    user.save().then(savedUser => {
        res.json(savedUser)
    })
    /*
    {
    "id": 8,
    "username": "baylie",
    "password": "p",
    "updatedAt": "2021-06-29T23:17:16.702Z",
    "createdAt": "2021-06-29T23:17:16.702Z"
    }
    */
})


router.get('/:user_id', async (req, res) => {
    const user_id = req.params.user_id
    //same as const { user_id } = req.params
    const found_user = await models.Users.findAll(
        {
            //where: column name , variable to check
            where: {id: user_id}
        }
    )
    //same as SELECT * FROM 'Users' WHERE id=1
    res.json(found_user)
})

router.get('/', (req, res) => {
    models.Users.findAll()
    .then(users => {
        res.json(users)
    })
})

module.exports = router