const greeting = require('express') 
let app = greeting()
let port = 5050 

app.listen(port, () => {
    console.log('Hi Practice3')
})

app.get('/', (req, res) => {
    res.send("Hi Practice3")
})