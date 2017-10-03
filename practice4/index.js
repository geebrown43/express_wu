const greeting = require('express') 
let money = greeting()
let port = 9000

money.listen(port, () => {
    console.log('Hi Practice4')
})

money.get('/', (req, res) =>{
    res.send('Hi Practice4')
})