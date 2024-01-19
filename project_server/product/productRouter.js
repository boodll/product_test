const express = require('express')
const router = express.Router()
const productDAO = require('./productDAO')

//유저 요청이 들어오면 실행.. 
router.get('/proDuct', function (req, res, next) {
    productDAO.product((resp) => {
        res.json(resp)
    })
})

router.exports = productDAO