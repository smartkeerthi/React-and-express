import express from 'express'
import Kafka from 'node-rdkafka';
import eventType from './eventType.js';
import produceData from './producer.js';


function getData(){
    // function getData(res){
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
        console.log(`received message: ${eventType.fromBuffer(data.value)}`);
        console.log(eventType.fromBuffer(data.value))
        // try{res.json(eventType.fromBuffer(data.value))}
        // catch{console.log('The First Data already Sent...')}
        // consumer.disconnect()
        // console.log('Disconnected...')
    })
}



const Router = express.Router()

Router.get('/start', (req, res) => {
    // console.log('Start button clicked')
    produceData()
    res.json("Start Clicked (Content From Server)")
    getData()
})

Router.get('/configuration', (req, res) => {
    // console.log('Config button clicked')
    res.json('Configuration Clicked (Content From Server)')
})

Router.get('/data', (req, res) => {
    const data = getData(res)
})

export default Router
