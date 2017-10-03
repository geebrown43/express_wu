const hi = require('express')
let moneyMachine = hi()
let port = 4000

moneyMachine.listen(port, () => {
    console.log('Hi Practice5')
})

moneyMachine.get('/', (req,res) => {
    res.send('Hi Practice5')
})