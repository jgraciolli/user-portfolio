import express from 'express'
import User from '../models/user.js'
import { isValidLogin, validateRegister } from '../public/util.js'
import { Op } from 'sequelize'

const authRouter = express.Router()

authRouter.get('/login', (req, res) => {
    try {
        res.status(200).render('authentication/login')    
    } catch (err) {
        res.status(400).send(`Error when redirecting to login page: ${err.message}`)
        console.log(`Error when redirecting to login page: ${err.message}`)   
    }    
})

authRouter.get('/register', (req, res) => {
    try {
        res.status(200).render('authentication/register')    
    } catch (err) {
        res.status(400).send(`Error when redirecting to register page: ${err.message}`)
        console.log(`Error when redirecting to register page: ${err.message}`)   
    }
})

authRouter.post('/login', async (req, res) => {
    if (!req.body)
        return res.status(400).send('Missing request body.')

    const {login, password} = req.body

    if (!login || !password)
        return res.status(400).send('Missing required fields.')
        
    const validLogin = isValidLogin(login)

    if (!validLogin)
        return res.status(400).send('Invalid login credentials.')

    let loginSearch = {}

    if (validLogin == 'email')
        loginSearch.email = login            
    else
        loginSearch.login_name = login

    loginSearch.password = password

    try {
        const user = await User.findOne({
            where: loginSearch
        })
   
        if (!user)
            return res.status(400).send(`No user found for these credentials.`)
  
        res.status(200).redirect(`/portfolio/${user.id}`)

    } catch (err) {
        res.status(400).send(`Error during login: ${err.message}`)
        console.log(`Error during login: ${err.message}`)
    }    
})

authRouter.post('/register', async (req, res) => {
    if (!req.body)        
        return res.status(400).send('Missing request body.')

    const {login_name, email, password} = req.body

    if (!login_name || !email || !password)
        return res.status(400).send('Missing required fields.')

    const validRegister = validateRegister(login_name, email, password)
        
    if (!validRegister)
        return res.status(400).send(`Invalid register credentials.`)
       
    try {
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [
                    {email: email},
                    {login_name: login_name}
                ]
            }   
        })

        if (existingUser)
            return res.status(409).send('An account with this email or username already exists.')        

        await User.create({ login_name, email, password })
        res.status(201).redirect('/auth/login')
      
    } catch (err) {
        console.log(`Error during registration: ${err.message}`)
        res.status(401).send(`Error during registration: ${err.message}`)
    }
})

export default authRouter