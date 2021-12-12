import { Settings } from '@material-ui/icons'
import {React, useState} from 'react'
import { Button } from 'reactstrap'
import './configButton.css'
import axios from '../../axios'

function ConfigButton() {
    // const [status, setStatus] = useState('')

    const handleConfig = () => {
        axios.get('/api/configuration')
            .then(res => {
                // setStatus(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="configButton">
            <Button size="lg" onClick={handleConfig}>
                <Settings/>
                PRODUCE
            </Button>
        </div>
    )
}

export default ConfigButton
