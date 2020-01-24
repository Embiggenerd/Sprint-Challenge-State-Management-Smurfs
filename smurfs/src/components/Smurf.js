import React from 'react'

const Smurf = ({name, age, height}) => {
    
    return (
        <div>
            <p>{`name: ${name}`}</p>
            <p>{`age: ${age}`}</p>
            <p>{`height: ${height}`}</p>
        </div>
    )
}

export default Smurf