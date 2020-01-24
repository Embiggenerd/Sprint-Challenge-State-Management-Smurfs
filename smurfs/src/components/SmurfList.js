import React, { useContext } from 'react'

import { SmurfContext } from '../contexts'

const SmurfList = () => {
    const { smurfs } = useContext(SmurfContext)
    return (
        <div>{smurfs.map(smurf => <div>{'hello'}</div>)}</div>
        // <p>list</p>
    )
}

export default SmurfList