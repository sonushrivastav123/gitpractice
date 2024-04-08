const express = require('express')
const multer = require('multer')
const {createSign} = require('crypto')
const fs = require('fs')
const app = express()
const PORT = process.env.PORT || 4500

const upload = multer({dest:"uploads/"})
app.post(`/upload`, upload.single("file"),(req,res)=>{
    const file = req.file
    const dimensions = JSON.parse(req.body.dimensions)
})


app.listen(PORT ,()=>console.log(`Server is running on ${PORT}`))


