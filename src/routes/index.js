const express = require('express')
const router = express.Router()
const word = require('./word')
const WordRouter = require('./word')
const Word = require("../../models/Word")
var app = express()

router.use('/words', word)



WordRouter.route('/').get(async(req, res) => {
    const words = await Word.find()
    res.json({status: 200, words})
})



module.exports = router