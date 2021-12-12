import express from 'express'

const Router = express.Router()

Router.get('/start', (req, res) => {
    res.json("Start Clicked (Content From Server)")
})

Router.get('/configuration', (req, res) => {
    res.json('Configuration Clicked (Content From Server)')
})

Router.get('/data', (req, res) => {
    const data = getData(res)
})

export default Router
