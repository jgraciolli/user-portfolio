const express = require('express')
const router = express.Router()
const User = require('../models/user')

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