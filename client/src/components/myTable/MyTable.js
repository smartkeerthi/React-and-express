import {React, useState} from 'react'
import './table.css'
import io from 'socket.io-client'

function MyTable() {
  let socket = io(`http://localhost:5000`)

  // const [sensor, setSensor] = useState('')
  // const [data, setData] = useState('')
  // const [time, setTime] = useState('')
  socket.on('sensorData', data => {
    // setSensor(data.sensor)
    // setData(data.data)
    // setTime(data.time)
    console.log(data)
  })

  return (
    <div>
      <table>
        <tr>
          <th>Sensor</th>
          <th>Data</th>
          <th>Time</th>
        </tr>
        {/* <tr>
          <td>{sensor}</td>
          <td>{data}</td>
          <td>{time}</td>
        </tr> */}
      </table>
    </div>
  )
}

export default MyTable
