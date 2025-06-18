import express from 'express'
import User from '../models/user.js'
import { where } from 'sequelize'

const portfolioRouter = express.Router()

portfolioRouter.get('/:userId', async (req, res) => {
    if (!req.params)
        return res.status(400).send('Missing request parameters.')

    if (!req.params['userId'])
        return res.status(400).send('Missing user id parameter.')

    const userId = req.params['userId']
    
    try {
        const user = await User.findOne({
            where: {
                id: userId
            }
        })

        if (!user)
            res.status(400).send(`No user found for id: ${userId}`)

        res.status(200).send(user).render('main/portfolio')
    } catch (err) {
        res.status(400).send(`Error when redirecting to portfolio: ${err.message}`)
        console.log(`Error when redirecting to portfolio: ${err.message}`)
    }
})

portfolioRouter.patch('/:userId', async (req, res) => {
    if (!req.params)
        return res.status(400).send('Missing request parameters.')

    const {userId} = req.params

    if (!userId)
        return res.status(400).send('Missing user id parameter.')

    if (isNaN(Number(userId)))
        return res.status(400).send('Invalid user ID.')
    
    const {newName, newSurname, newAge, newSkills, new_photo_path} = req.body    

    try {    
        const user = await User.findByPk(userId)        
        if (!user)
            return res.status(400).send(`No user found for ID: ${userId}.`)

        const updatedUser = await User.update({
            name: newName,
            surname: newSurname,
            age: newAge,
            skills: newSkills,
            photo_path: new_photo_path
        },
        {
            where: { id: userId }
        })

        if (!updatedUser)
            return res.status(400).send('Could not update portfolio.')
        
        res.status(200).send('Portfolio succesfully updated!')
    } catch (err) {
        console.log(`An error occurred when updating user data: ${err}.`)
        res.status(400).send(`An error occurred when updating user data: ${err}.`)       
    }
    
})

export default portfolioRouter