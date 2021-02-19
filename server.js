const express = require('express')
require('dotenv').config()
const PORT = process.env.port || 8080;
const app = express()
global.models = require('./models')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

const indexRouter = require('./routes/index')
const postsRouter = require('./routes/posts')
const accountRouter = require('./routes/account')

app.use('/', indexRouter)
app.use('/posts', postsRouter)
app.use('/account', accountRouter)




app.listen(PORT, () => {

    console.log(`Server started on port ${PORT} at: ` +Date())

})