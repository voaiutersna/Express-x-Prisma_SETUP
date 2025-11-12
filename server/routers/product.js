const express = require('express');
const { create,list,read,update,remove } = require('../controller/product');
const router = express.Router()

router.post("/product",create)
router.get("/product",list)
router.get("/product/:productId",read)
router.put("/product/:productId",update)
router.delete("/product/:productId",remove)

module.exports = router;