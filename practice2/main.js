const express = require('express')
let app = express()
let port = 5000

app.listen(port, () => {
    console.log('Hi Practice2')
})

app.get('/', (req,res) => {
 res.send('Hi Practice2')
})
