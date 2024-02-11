const express = require('express')
const app = express()

const beehive = require('./routes/beehive')

app.get('/', (req, res) => {
    res.send("site loaded...")
})

app.use('/beehive', beehive)

app.listen(9900)