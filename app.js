import express from 'express'
import db from './db/connection.js'
import path from 'path'
import { fileURLToPath } from 'url';
import ejs from 'ejs'
import bodyParser from 'body-parser';
import authRouter from './routes/authentication.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server succesfully running on port ${PORT}.`)   
})

// database connection
db.authenticate()
    .then(() => {
        console.log('Succesfull db connection!')
    })
    .catch(err => console.log(`Unsuccessfull db connection -> ${err}.`))

// here i set the static files default folder
app.use(express.static(path.join(__dirname, 'styles')));

// setting the body-parser tool for handling req.body
app.use(bodyParser.urlencoded({ extended: false }))

// setting express view engine
app.set('views', path.join(__dirname, 'views/authentication'))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.use('/user', authRouter)