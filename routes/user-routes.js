import express from 'express'
import User from '../models/user.js'

const router = express.Router()

router.post('/register/add', (req, res) => {
    let {login_name, email, password, name, surname, age, skills, photo_path} = req.body

    User.create({
        login_name,
        email,
        password,
        name,
        surname,
        age,
        skills,
        photo_path
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log('An error occurred when creating new user -> ', err))
})