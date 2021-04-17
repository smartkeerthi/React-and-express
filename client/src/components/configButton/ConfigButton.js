import { Settings } from '@material-ui/icons'
import React from 'react'
import { Button } from 'reactstrap'
import './configButton.css'
import axios from '../../axios'

function configButton() {

    const handleConfig = () => {
        axios.get('/api/configuration')
            .then(res => {
                alert(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="configButton">
            <Button size="lg" onClick={handleConfig}>
                <Settings/>
                CONFIG
            </Button>
        </div>
    )
}

export default configButton
