import React, { useContext } from 'react'

import { SmurfContext } from '../contexts';

const Smurf = ({ name, age, height, id }) => {
    const { handleDeleteSmurf } = useContext(SmurfContext)

    return (
        <div>
            <p>{`name: ${name}`}</p>
            <p>{`age: ${age}`}</p>
            <p>{`height: ${height}`}</p>
            <button onClick={() => handleDeleteSmurf(id)}>Delete</button>
        </div>
    )
}

export default Smurf