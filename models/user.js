const { Sequelize } = require('sequelize')
const db = require('../db/connection')



const User = db.define('User', {
    login_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    surname: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    skills: {
        type: Sequelize.STRING
    },
    photo_path: {
        type: Sequelize.STRING
    }
})

module.exports = User;