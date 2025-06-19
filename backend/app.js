import express from 'express'
import db from './db/connection.js'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import router from './routes/router.js'
import portfolioRouter from './routes/portfolio-router.js'

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

// importing routers
app.use('/', router)
app.use('/portfolio', portfolioRouter)