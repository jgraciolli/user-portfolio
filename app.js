import message from './module.js'
import express from 'express'
import db from './db/connection.js'
import User from './models/user.js'
import path from 'path'
import { fileURLToPath } from 'url';
import ejs from 'ejs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = 3000

console.log(message())

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

// here i set the static files default folder
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views/authentication'))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.get('/', (req, res) => {
    console.log('Rendered main page!')
    res.render('login.html')
})