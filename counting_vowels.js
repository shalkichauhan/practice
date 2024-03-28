const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send("hi, welcome to my new website")
})


app.listen(3000, () => {
    console.log("working!")
})

