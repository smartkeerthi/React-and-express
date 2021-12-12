import express, { response } from 'express'
import fetch from 'node-fetch'

async function topics() {
    const resp = await fetch(`http://localhost:8082/topics/${topic}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.kafka.v2+json'
        }
    }).then((response) => response.json())

    return resp
}

async function produceData(topic, data) {
    const resp = await fetch(`http://localhost:8082/topics/${topic}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/vnd.kafka.json.v2+json'},
        body: `{"records":[{"value":{"name":"${data}}"}]}`,
    }).then((response) => response.json())

    return resp
}

async function createConsumer() {
    const resp = await fetch(`http://localhost:8082/consumers/my_json_consumer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.kafka.json.v2+json',
            'Accept': 'application/vnd.kafka.v2+json'
        },
        body: '{"name": "my_consumer_instance", "format": "json", "auto.offset.reset": "earliest"}'
    }).then((response) => response.json())

    return resp
}

async function consumerSubscription(topic) {
    const resp = await fetch(`http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/subscription`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.kafka.json.v2+json',
        },
        body: `{"topics":["${topic}"]}`
    })
    // .then((response) => response.json())

    // return resp
}

async function consumerOffsets() {
    const resp = await fetch(`http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/offsets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.kafka.json.v2+json',
            'Accept': 'application/vnd.kafka.v2+json'
        },
    }).then((response) => response.json())

    return resp
}

async function consumerInstance() {
    const resp = await fetch(`http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/topics/jsontest/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.kafka.v2+json'
        }
    }).then((response) => response.json())

    return resp
}

const Router = express.Router()

Router.get('/start', async (req, res) => {
    console.log('Start button clicked')
    
    res.json('Start Clicked (Content From Server)')
})

Router.get('/config', (req, res) => {
    console.log('Config button clicked')

    res.json('Config Clicked (Content From Server)')
})

Router.get('/produce', async (req, res) => {
    console.log('Produce button clicked')
    
    const data = await produceData('jsontest','Hello_World')
    res.json(data)
})

Router.get('/createConsumer', async (req, res) => {
    console.log('Create Consumer button clicked')
    
    const data = await createConsumer()
    res.json(data)
})

Router.get('/consumerSubscription', async (req, res) => {
    console.log('Consumer Subscription button clicked')
    
    const data = await consumerSubscription('jsontest')
    res.json(data)
})

Router.get('/consumerOffsets', async (req, res) => {
    console.log('Consumer Offsets button clicked')
    
    const data = await consumerOffsets()
    res.json(data)
})

Router.get('/consumerInstance', async (req, res) => {
    console.log('Consumer Instance button clicked')
    
    const data = await consumerInstance()
    res.json(data)
})

export default Router
