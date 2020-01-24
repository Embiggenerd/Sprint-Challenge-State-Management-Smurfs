import React, { useContext } from 'react'

import Smurf from './Smurf'
import { SmurfContext } from '../contexts'

const SmurfList = () => {
    const { smurfs } = useContext(SmurfContext)
    return (
        <div>{smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}</div>
    )
}

export default SmurfList