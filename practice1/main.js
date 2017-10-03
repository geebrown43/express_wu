const practice = require('express')
let app = practice()
let port = 4000

app.listen(port, () => {
    console.log('hi practice1')
})

app.get('/', (req, res) => {
    res.send('Hi Practice1')
})