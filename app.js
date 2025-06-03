const db = require('./db/connection')
const User = require('./models/user')

// database connection
db.authenticate()
    .then(() => {
        console.log('Succesfull db connection!')
    })
    .catch(err => console.log('Unsuccessfull -> ', err))