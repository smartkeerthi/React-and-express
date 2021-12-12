import React, { useState } from 'react'
import axios from '../../axios'
import { Button } from 'reactstrap'
import './datas.css'

function Datas() {
    const [loading, setLoading] = useState('')
    const [sensor, setSensor] = useState('')
    const [data, setData] = useState('')
    const [time, setTime] = useState('')
    const handleData = () => {
        setLoading('Waiting For Data...!');
        axios.get('/api/data')     // http://localhost:5000/api/data/
            .then(res => {
                const data = res.data;
                setSensor(data.sensor);
                setData(data.data);
                setTime(data.time);
                setLoading('');
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div className="datas">
            <div className="datas">
                <Button size="lg" onClick={handleData}>
                    Get One Data
                </Button>
            </div>
            <div className="datas">
                <div>{loading}</div>
            </div>
            <div className="datas">
                <div>Sensor: {sensor}</div>
                <div>Data: {data}</div>
                <div>Time: {time}</div>
            </div>

        </div>
    )
}

export default Datas
