import React from 'react'
import './startButton.css'
import { Button } from 'reactstrap'
import { PlayArrow } from '@material-ui/icons'
import axios from '../../axios'

function startButton() {

    const handleStart = () => {
        axios.get('/api/start')     // http://localhost:5000/api/start/
            .then(res => {
                console.log(res.data)
                // alert(data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="startButton">
            <Button size="lg" onClick={handleStart}>
                <PlayArrow/>
                START
            </Button>
        </div>
    )
}

export default startButton
