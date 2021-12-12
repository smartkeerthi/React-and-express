import express from 'express'
import system from 'system-commands'
import request from 'request'

function systemCommands(){
    system('ls').then(
        output => {
            data = 'Respons From Server:\n\n' + output
            console.log(data)
            return res.json(data)
        }
    ).catch(
        error => {
            console.error(error)
            return res.json(error)
        }
    )
}

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        return body
    }
    else{
        console.log(error)
    }
}

function produceData(topic, data) {
    var requestForm = {
        url: `http://localhost:8082/topics/${topic}`,
        method: 'POST',
        headers: {'Content-Type': 'application/vnd.kafka.json.v2+json'},
        body: `{"records":[{"value":"${data}"}]}`,
    }
    request(requestForm, callback).then(
        response => {
            console.log(response)
        }
    )
    return data
}

function createConsumer() {
    var requestForm = {
        url: 'http://localhost:8082/consumers/my_json_consumer',
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.kafka.json.v2+json',
            'Accept': 'application/vnd.kafka.v2+json'
        },
        body: '{"name": "my_consumer_instance", "format": "json", "auto.offset.reset": "earliest"}'
    }
    request(requestForm, callback)
}

function consumerSubscription(topic) {
    var requestForm = {
        url: 'http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/subscription',
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.kafka.json.v2+json',
        },
        body: `{"topics":["${topic}"]}`
    }
    request(requestForm, callback)
}

function consumerInstance() {
    var requestForm = {
        url: 'http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/records',
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.kafka.v2+json'
        }
    }
    request(requestForm, callback)
}

const Router = express.Router()

Router.get('/start', (req, res) => {
    console.log('Start button clicked')
    const data = produceData('jsontest', "New_Data5")
    res.json(data)
    // createConsumer()
})

Router.get('/configuration', (req, res) => {
    console.log('Config button clicked')
    res.json('Configuration Clicked (Content From Server')
})

export default Router
