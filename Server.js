require('dotenv').config()
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const router = require('./router/auth-router')
const port = 8080

app.use(bodyParser.urlencoded({extended : true}))

app.use('/auth',router)

app.get('/', (req, res) => {
    res.send('<h1>This is HomePage</h1>')
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

