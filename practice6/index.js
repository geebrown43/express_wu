const greeting = require('express')
let money = greeting()
let port = 9090

money.listen(port, () => {
    console.log('Hi Practice6')
})

money.get('/', (req, res) => {
    res.send('Hi Practice6')
})

