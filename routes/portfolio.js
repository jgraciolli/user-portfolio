import express from 'express'
import User from '../models/user.js'

const portfolioRouter = express.Router()

portfolioRouter.get('/:username', (req, res) => {
    res.render('main/portfolio')
})

export default portfolioRouter