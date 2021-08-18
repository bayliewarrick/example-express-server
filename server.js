const express = require('express')
require('dotenv').config()
const PORT = process.env.port || 1234;
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
/*
const user = {
    first_name: 'abc',
    last_name: 'def',
    address: {
        first: '123 house street',
        zip: '66281'
    }
}

const funds = [
    1000,
    2000,
    4000
]

const { first_name, last_name } = user;
const { zip, first } = user.address;

const [a, b] = funds;
console.log(a)
console.log(b)
//reference in order it appears


console.log(first_name)
console.log(last_name)
console.log(first + ', ' + zip)

*/
app.listen(PORT, () => {

    console.log(`Server started on port: ${PORT} \n Started at: ` +Date());

})