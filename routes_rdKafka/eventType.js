import avro from 'avsc';

export default avro.Type.forValue({
  sensor: 'Sensor',
  data: 12,
  time: `${new Date()}`
});