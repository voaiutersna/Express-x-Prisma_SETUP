// Step 1
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

// Step 4 Middleware
app.use(express.json()); // middleware สำเร็จรูปของ express เอาไว้ อ่าน body ของ request ที่เป็น JSON string แล้ว parse ให้เป็น JavaScript object
app.use(morgan('dev'))  // show log Request in server console
app.use(cors())

// Step 3 Route
// Type 1
// const fs = require('fs')
// fs.readdirSync('./routers').map((file)=>{
//     const route = require(`./routers/${file}`)
//     console.log(route)
//     app.use('/api',route)
// })
// Type 2
const { readdirSync } = require('fs')
readdirSync('./routers').map((file)=>
    app.use('/api', require('./routers/'+file))) //require ดึง Router object แต่ละไฟล์มาเชื่อม route กับ path app และ /api

// Step 2 Start Server
app.listen(5001,()=>{
    console.log('server is running on port 5001')
})
