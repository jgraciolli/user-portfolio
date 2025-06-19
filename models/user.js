import Sequelize from 'sequelize'
import db from '../db/connection.js'

const User = db.define('user', {
    login_name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER },
    skills: { type: Sequelize.STRING },
    photo_path: { type: Sequelize.STRING }
})

export default User