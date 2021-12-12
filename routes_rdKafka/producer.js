console.log('Producer...')

import Kafka from 'node-rdkafka';
import eventType from './eventType.js';

const stream = Kafka.Producer.createWriteStream({
  "metadata.broker.list":"localhost:9092"
}, {}, {topic: 'test'});

function queueMessage() {
  const sensors = ['DFT Sensor', 'Humidity Sensor', 'light Sensor', 'Soil Moisture Sensor', 'Gas Sensor']
  const event = { 
    sensor: sensors[Math.floor(Math.random() * 5)],
    data: Math.floor(Math.random() * 100),
    time: `${(new Date()).toUTCString()}`
  }
  // const success = stream.write(Buffer.from('hi'));
  const success = stream.write(eventType.toBuffer(event));
  // const success = stream.write(JSON.stringify(event));
  if (success){
    console.log("The Message was Streamed....");
  } else {
    console.log("Something went Wrong....");
  }
}

export default queueMessage;


// queueMessage()


// setInterval(() => {
//   queueMessage();
// }, 3000)