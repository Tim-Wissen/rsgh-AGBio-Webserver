const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(req.query.name)
})

module.exports = router