import express from 'express'
import Kafka from 'node-rdkafka';
import eventType from './eventType.js';
import produceData from './producer.js';
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: "*" }});


// function getData(){
function getData(res){
    const consumer = Kafka.KafkaConsumer({
        "group.id":"kafka",
        "metadata.broker.list":"localhost:9092"
    }, {});
    
    consumer.connect();
    
    consumer.on('ready', () => {
        console.log('consumer ready...');
        consumer.subscribe(['test']);
        consumer.consume();
    }).on('data', async (data) => {
        // console.log(`received message: ${eventType.fromBuffer(data.value)}`);
        // io.emit('sensorData', eventType.fromBuffer(data.value))
        res.json(eventType.fromBuffer(data.value))
        console.log(eventType.fromBuffer(data.value))
        // consumer.disconnect()
        // console.log('Disconnected...')
    })
}



const Router = express.Router()

Router.get('/start', (req, res) => {
    res.json('Start Monitoring...')
    console.log('Start Monitoring...')
    getData()
    // consumer.disconnect()
    // console.log('Disconnected...')
})

Router.get('/configuration', (req, res) => {
    res.json("Producing a Data...")
    console.log("Producing a Data...")
    produceData()
    // getData()
})

Router.get('/data', (req, res) => {
    const data = getData(res)
})

export default Router
