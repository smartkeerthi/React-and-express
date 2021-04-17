import React from 'react'
import './startButton.css'
import { Button } from 'reactstrap'
import { PlayArrow } from '@material-ui/icons'
import axios from '../../axios'

function startButton() {

    const handleStart = () => {
        axios.get('/api/start')
            .then(res => {
                const data = res.data;
                alert(data);
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
