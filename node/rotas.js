const express = require('express')

const app = express()

app.get("/", function (req, res) {
    res.send("Ola mundo")
})
app.listen(8081, function () {
    console.log("rodando")
})



