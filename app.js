import express from 'express'
import db from './db/connection.js'
import path from 'path'
import { fileURLToPath } from 'url';
import ejs from 'ejs'
import bodyParser from 'body-parser';
import authRouter from './routes/authentication.js';
import portfolioRouter from './routes/portfolio.js';

// setting __dirname manually since I chose to use EcmaScript6 'import and export' and not default 'require' from node.js
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
app.set('views', path.join(__dirname, 'views'))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

// importing the authentication router for login and register purposes
app.use('/auth', authRouter)

app.use('/portfolio', portfolioRouter)

app.get('/', (req, res) => {
    res.render('/main/home')
})