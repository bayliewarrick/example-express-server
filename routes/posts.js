const express = require('express')
const router = express.Router()

router.post('/add-post', (req, res) => {

    const {title, body, category} = req.body;

    let post = models.Post.build({
        title,
        body,
        category
    })

    post.save().then(savedPost => res.json(savedPost))
})

router.post('/update-post/:postId', (req, res) => {
    models.Post.update({
        title: 'hello, world'
        }, {
        where: {
          id: req.params.postId
        }
      })
})

router.post('/delete-post/:postId',(req, res) => {
    models.Post.destroy({
        where: {
            id: req.params.postId
        }
    })
})

/* route parameter example, postId would be a parameter */
router.get('/:postId',(req,res) => {
    const postId = parseInt(req.params.postId) 
    models.Post.findByPk(postId).then(post => res.json(post))
})

router.get('/filter/:category', (req, res) => {
    models.Post.findAll({
        where: {
          category: req.params.category
        }
      }).then(posts => res.json(posts))
})

router.get('/',(req, res) => {

    models.Post.findAll().then(posts => res.json(posts))

})

module.exports = router