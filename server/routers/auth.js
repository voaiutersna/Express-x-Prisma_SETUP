const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
    res.send('Success fully login')
})

//export router object ออกไป
module.exports = router