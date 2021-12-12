import { Kafka } from 'kafkajs'

const kafka = new Kafka ({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'test123' })

const run = async () => {
  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'test', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
  // await consumer.run({
  //   eachBatchAutoResolve: true,
  //   eachBatch: async ({batch, resolveOffset, heartbeat, commitOffsetsIfNecessary, uncommittedOffsets, isRunning, isStale }) => {
  //     for (let message of batch.messages) {
  //       console.log({
  //         topic: batch.topic,
  //         partition: batch.partition,
  //         highWatermark: batch.highWatermark,
  //         message: {
  //           offset: message.offset,
  //           key: message.key.toString(),
  //           value: message.value.toString(),
  //           headers: message.headers,
  //         }
  //       })

  //       resolveOffset(message.offset)
  //       // await consumer.disconnect()
  //       await heartbeat()
  //     }
  //   },
  // })
}

run().catch(console.error)
