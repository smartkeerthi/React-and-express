import express from 'express'

const Router = express.Router()

Router.get('/start', (req, res) => {
    console.log('Start button clicked')
    res.json('Server started')
})

Router.get('/configuration', (req, res) => {
    console.log('Config button clicked')
    res.json('Configuration Clicked')
})

export default Router