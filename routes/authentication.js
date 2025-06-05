import express from 'express'
import User from '../models/user.js'
import { isValidLogin } from '../public/util.js'

const authRouter = express.Router()

authRouter.get('/login', (req, res) => {
    res.render('login')
})

authRouter.get('/register', (req, res) => {
    res.render('register')
})

authRouter.post('/login', (req, res) => {
    let {login, password} = req.body
    let loginSearch = {}

    const validation = isValidLogin(login)
    if (validation == 'invalid') {
        res.status(400).send('Invalid login.')
        throw new Error('Invalid login credentials')
    }
    else if (validation == 'email')
        loginSearch.email = login            
    else if (validation == 'login_name')
        loginSearch.login_name = login

    loginSearch.password = password

    User.findOne({
        where: loginSearch
    })
    .then((user) => {
        if (user)
            res.send(user)
        else {
            res.status(400).send('No user found for these credentials.')
        }
    })
    .catch((err) => {        
        res.status(400).send(`An error occurred during the login: ${err.message}.`)
    })
})

authRouter.post('/register', (req, res) => {
    let {login_name, email, password} = req.body

    User.create({
        login_name,
        email,
        password        
    })
    .then(() => res.redirect('/portfolio'))
    .catch(err => console.log('An error occurred when creating new user -> ', err))
})

export default authRouter