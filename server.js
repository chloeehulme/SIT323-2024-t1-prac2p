const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

port = 8000
app.listen(port, function() {
    console.log("server listening on port " + port)
})