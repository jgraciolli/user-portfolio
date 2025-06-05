import Sequelize from "sequelize"

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

export default db