const prisma = require('../prisma/prisma')

exports.create = async function(req,res) {
    try{
        const { title , price } = req.body 
        const newProduct = await prisma.Product.create({
            //type ที่ request ต้องตรงกับใน field ด้วยไม่งั้นจะ error
            data:{
                name:title,
                price:price
            }
        })
        res.send(newProduct)
    }catch(err){
        res.send({Errormessage:"ERROR FROM CREATE FN"})
    }
}

exports.list = async (req,res)=>{
    try{
        const listProduct = await prisma.Product.findMany()
        res.send(listProduct)
    }catch(err){
        res.send({Errormessage:"ERROR FROM LIST FN"})
    }
}

exports.read = async function(req,res){
    try{
        // console.log(req.params)
        let { productId } = req.params
        // productId = Number(productId)
        // console.log(productId)
        const find_one_product = await prisma.Product.findUnique({
            where: {
                id: productId
            }
        })
        res.send(find_one_product)
    }catch(err){
        res.send({Errormessage:"ERROR FROM READ FN"})
    }
}

exports.update = async function(req,res){
    try{
        let { productId } = req.params
        const { title , price } = req.body
        update_log = await prisma.Product.update({
            where:{id:Number(productId)},
            data:{name:title,price:price}
        })
        res.json(update_log)
    }catch(err){
        res.send({Errormessage:"ERROR FROM UPDATE FN"})
    }
}

exports.remove = async function(req,res){
    try{
        const { productId } = req.params
        remove_log = await prisma.Product.delete({
            where:{id:Number(productId)}
        })
        res.json(remove_log)
    }catch(err){
        res.send({Errormessage:"ERROR FROM REMOVE FN"})
    }
}