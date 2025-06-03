const express = require('express')
const app = express()
const db = require('./db/connection')
const User = require('./models/user')
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server succesfully running on port ${PORT}.`)
    console.log('Directory folder -> ', __dirname)
})

// database connection
db.authenticate()
    .then(() => {
        console.log('Succesfull db connection!')
    })
    .catch(err => console.log(`Unsuccessfull db connection -> ${err}.`))

app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req, res) => {
    
})