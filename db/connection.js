import { Sequelize } from 'sequelize'

const db = new Sequelize({
    dialect: 'sqlite',
    path: './app.db'
})

export default db