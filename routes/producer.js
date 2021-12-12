import { Kafka } from 'kafkajs'

const kafka = new Kafka ({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'test',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
  await producer.disconnect()
}


setInterval(() => {
  run().catch(console.error)
}, 3000);

