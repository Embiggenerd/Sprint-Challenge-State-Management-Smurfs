import React, { useContext } from 'react'

import Smurf from './Smurf'
import { SmurfContext } from '../contexts'

const SmurfList = () => {
    const { smurfs } = useContext(SmurfContext)

    return (
        <ol>{smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}</ol>
    )
}

export default SmurfList